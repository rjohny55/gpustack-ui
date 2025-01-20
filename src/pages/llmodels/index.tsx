import TableContext from '@/components/seal-table/table-context';
import useSetChunkRequest from '@/hooks/use-chunk-request';
import useUpdateChunkedList from '@/hooks/use-update-chunk-list';
import { queryWorkersList } from '@/pages/resources/apis';
import {
  GPUDeviceItem,
  ListItem as WokerListItem
} from '@/pages/resources/config/types';
import _ from 'lodash';
import qs from 'query-string';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { MODELS_API, MODEL_INSTANCE_API, queryModelsList } from './apis';
import TableList from './components/table-list';
import { ListItem } from './config/types';

const Models: React.FC = () => {
  const { setChunkRequest, createAxiosToken } = useSetChunkRequest();
  const { setChunkRequest: setModelInstanceChunkRequest } =
    useSetChunkRequest();
  const [modelInstances, setModelInstances] = useState<any[]>([]);
  const [dataSource, setDataSource] = useState<{
    dataList: ListItem[];
    deletedIds: number[];
    loading: boolean;
    loadend: boolean;
    total: number;
  }>({
    dataList: [],
    deletedIds: [],
    loading: false,
    loadend: false,
    total: 0
  });

  const [gpuDeviceList, setGpuDeviceList] = useState<GPUDeviceItem[]>([]);
  const [workerList, setWorkerList] = useState<WokerListItem[]>([]);
  const chunkRequedtRef = useRef<any>();
  const chunkInstanceRequedtRef = useRef<any>();
  const isPageHidden = useRef(false);
  const instancesToken = useRef<any>();
  let axiosToken = createAxiosToken();
  const [queryParams, setQueryParams] = useState({
    page: 1,
    perPage: 10,
    search: '',
    categories: []
  });

  const { updateChunkedList, cacheDataListRef } = useUpdateChunkedList({
    events: ['UPDATE'],
    dataList: dataSource.dataList,
    setDataList(list, opts?: any) {
      setDataSource((pre) => {
        return {
          total: pre.total,
          loading: false,
          loadend: true,
          dataList: list,
          deletedIds: opts?.deletedIds || []
        };
      });
    }
  });

  const {
    updateChunkedList: updateInstanceChunkedList,
    cacheDataListRef: cacheInsDataListRef
  } = useUpdateChunkedList({
    dataList: modelInstances,
    limit: 100,
    setDataList: setModelInstances
  });

  const getWorkerList = async () => {
    try {
      const data = await queryWorkersList({ page: 1, perPage: 100 });
      setWorkerList(data.items || []);
    } catch (error) {
      // ingore
      setWorkerList([]);
    }
  };

  const fetchData = useCallback(async () => {
    axiosToken?.cancel?.();
    axiosToken = createAxiosToken();
    setDataSource((pre) => {
      pre.loading = true;
      return { ...pre };
    });
    try {
      const params = {
        ..._.pickBy(queryParams, (val: any) => !!val)
      };
      const res: any = await queryModelsList(params, {
        cancelToken: axiosToken.token
      });
      setDataSource({
        dataList: res.items || [],
        loading: false,
        loadend: true,
        total: res.pagination.total,
        deletedIds: []
      });
    } catch (error) {
      if (!isPageHidden.current) {
        setDataSource({
          dataList: [],
          loading: false,
          loadend: true,
          total: dataSource.total,
          deletedIds: []
        });
      }
    }
  }, [queryParams]);

  const handlePageChange = useCallback(
    (page: number, pageSize: number | undefined) => {
      setQueryParams({
        ...queryParams,
        page: page,
        perPage: pageSize || 10
      });
    },
    [queryParams]
  );

  const updateHandler = (list: any) => {
    _.each(list, (data: any) => {
      updateChunkedList(data);
    });
  };

  const updateInstanceHandler = (list: any) => {
    // filter the data
    _.each(list, (data: any) => {
      updateInstanceChunkedList(data);
    });
  };

  const createModelsChunkRequest = useCallback(async () => {
    chunkRequedtRef.current?.current?.cancel?.();
    try {
      const query = {
        search: queryParams.search,
        categories: queryParams.categories
      };
      chunkRequedtRef.current = setChunkRequest({
        url: `${MODELS_API}?${qs.stringify(_.pickBy(query, (val: any) => !!val))}`,
        handler: updateHandler
      });
    } catch (error) {
      // ignore
    }
  }, [queryParams.categories, queryParams.search]);

  const createModelsInstanceChunkRequest = useCallback(async () => {
    chunkInstanceRequedtRef.current?.current?.cancel?.();
    try {
      chunkInstanceRequedtRef.current = setModelInstanceChunkRequest({
        url: `${MODEL_INSTANCE_API}`,
        params: {},
        handler: updateInstanceHandler
      });
    } catch (error) {
      // ignore
    }
  }, []);

  const handleOnViewLogs = useCallback(() => {
    isPageHidden.current = true;
    chunkRequedtRef.current?.current?.cancel?.();
    cacheDataListRef.current = [];
    cacheInsDataListRef.current = [];
    chunkInstanceRequedtRef.current?.current?.cancel?.();
  }, []);

  const handleOnCancelViewLogs = useCallback(async () => {
    isPageHidden.current = false;
    await createModelsInstanceChunkRequest();
    await createModelsChunkRequest();
    fetchData();
  }, [fetchData, createModelsChunkRequest, createModelsInstanceChunkRequest]);

  const handleSearch = useCallback(async () => {
    await fetchData();
  }, [fetchData]);

  const debounceUpdateFilter = _.debounce((e: any) => {
    setQueryParams({
      ...queryParams,
      page: 1,
      search: e.target.value
    });
  }, 350);

  const handleNameChange = useCallback(debounceUpdateFilter, [queryParams]);

  const handleCategoryChange = useCallback(
    (value: any) => {
      setQueryParams({
        ...queryParams,
        page: 1,
        categories: value
      });
    },
    [queryParams]
  );

  useEffect(() => {
    fetchData();
    return () => {
      axiosToken?.cancel?.();
    };
  }, [queryParams]);

  useEffect(() => {
    createModelsChunkRequest();
  }, [createModelsChunkRequest]);

  useEffect(() => {
    getWorkerList();
    createModelsInstanceChunkRequest();

    return () => {
      chunkRequedtRef.current?.current?.cancel?.();
      cacheDataListRef.current = [];
      cacheInsDataListRef.current = [];
      chunkInstanceRequedtRef.current?.current?.cancel?.();
      instancesToken.current?.cancel?.();
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'visible') {
        isPageHidden.current = false;
        await createModelsInstanceChunkRequest();
        await createModelsChunkRequest();
        fetchData();
      } else {
        isPageHidden.current = true;
        chunkRequedtRef.current?.current?.cancel?.();
        cacheDataListRef.current = [];
        cacheInsDataListRef.current = [];
        chunkInstanceRequedtRef.current?.current?.cancel?.();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [fetchData, createModelsChunkRequest, createModelsInstanceChunkRequest]);

  return (
    <TableContext.Provider
      value={{
        allChildren: modelInstances
      }}
    >
      <TableList
        dataSource={dataSource.dataList}
        handleNameChange={handleNameChange}
        handleCategoryChange={handleCategoryChange}
        handleSearch={handleSearch}
        handlePageChange={handlePageChange}
        handleDeleteSuccess={fetchData}
        onViewLogs={handleOnViewLogs}
        onCancelViewLogs={handleOnCancelViewLogs}
        queryParams={queryParams}
        loading={dataSource.loading}
        loadend={dataSource.loadend}
        total={dataSource.total}
        deleteIds={dataSource.deletedIds}
        gpuDeviceList={gpuDeviceList}
        workerList={workerList}
      ></TableList>
    </TableContext.Provider>
  );
};

export default memo(Models);
