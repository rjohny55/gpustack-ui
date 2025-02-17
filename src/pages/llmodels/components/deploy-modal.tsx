import ModalFooter from '@/components/modal-footer';
import { PageActionType } from '@/config/types';
import { CloseOutlined, SettingOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button, Drawer, Form, Modal } from 'antd';
import { debounce } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ModelSortType, backendOptionsMap, modelSourceMap } from '../config';
import { FormData } from '../config/types';
import ColumnWrapper from './column-wrapper';
import DataForm from './data-form';
import HFModelFile from './hf-model-file';
import ModelCard from './model-card';
import SearchModel from './search-model';
import SearchResult from './search-result';
import Separator from './separator';
import TitleWrapper from './title-wrapper';

type AddModalProps = {
  title: string;
  action: PageActionType;
  open: boolean;
  source: string;
  width?: string | number;
  onOk: (values: FormData) => void;
  onCancel: () => void;
};

const AddModal: React.FC<AddModalProps> = (props) => {
  const {
    title,
    open,
    onOk,
    onCancel,
    source,
    action,
    width = 600
  } = props || {};
  const SEARCH_SOURCE = [
    modelSourceMap.huggingface_value,
    modelSourceMap.modelscope_value
  ];

  const form = useRef<any>({});
  const intl = useIntl();
  const [selectedModel, setSelectedModel] = useState<any>({});
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [loadingModel, setLoadingModel] = useState<boolean>(false);
  const [isGGUF, setIsGGUF] = useState<boolean>(false);
  const modelFileRef = useRef<any>(null);
  const [loadfinish, setLoadfinish] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<{
    repoOptions: any[];
    loading: boolean;
    networkError: boolean;
    sortType: string;
  }>({
    repoOptions: [],
    loading: false,
    networkError: false,
    sortType: ModelSortType.trendingScore
  });
  const [current, setCurrent] = useState<string>('');
  const fileName = Form.useWatch('file_name', form);
  const [showAdvanvce, setShowAdvance] = useState<boolean>(false);

  const handleSelectModelFile = useCallback((item: any) => {
    form.current?.setFieldValue?.('file_name', item.fakeName);
    setLoadfinish(true);
  }, []);

  const handleOnSelectModel = (item: any) => {
    setSelectedModel(item);
    setCurrent(item.id);
  };

  const handleSumit = () => {
    form.current?.submit?.();
  };

  const debounceFetchModelFiles = debounce(() => {
    modelFileRef.current?.fetchModelFiles?.();
  }, 300);

  const handleSetIsGGUF = (flag: boolean) => {
    setIsGGUF(flag);
    if (flag) {
      debounceFetchModelFiles();
    }
  };

  const handleBackendChange = (backend: string) => {
    if (backend === backendOptionsMap.vllm) {
      setIsGGUF(false);
    }

    if (backend === backendOptionsMap.llamaBox) {
      setIsGGUF(true);
    }
  };

  const handlerSearchModels = (e: any) => {};

  const handleSearchInputChange = (e: any) => {};

  const handleCancel = useCallback(() => {
    onCancel?.();
  }, [onCancel]);

  const handleShowAdvanceSettings = () => {
    setShowAdvance(!showAdvanvce);
  };

  useEffect(() => {
    handleSelectModelFile({ fakeName: '' });
  }, [selectedModel]);

  useEffect(() => {
    if (!open) {
      setIsGGUF(false);
      form.current?.setFieldValue?.('backend', backendOptionsMap.vllm);
    } else if (source === modelSourceMap.ollama_library_value) {
      form.current?.setFieldValue?.('backend', backendOptionsMap.llamaBox);
      setIsGGUF(true);
    }

    return () => {
      setSelectedModel({});
    };
  }, [open, source]);

  return (
    <Drawer
      title={
        <div className="flex-between flex-center">
          <span
            style={{
              color: 'var(--ant-color-text)',
              fontWeight: 'var(--font-weight-medium)',
              fontSize: 'var(--font-size-middle)'
            }}
          ></span>
          <SearchModel
            modelSource={props.source}
            dataSource={dataSource}
            setDataSource={setDataSource}
            setCurrent={setCurrent}
            onSelectModel={handleOnSelectModel}
            setLoadingModel={setLoadingModel}
          ></SearchModel>
          <Button type="text" size="small" onClick={handleCancel}>
            <CloseOutlined></CloseOutlined>
          </Button>
        </div>
      }
      open={open}
      onClose={handleCancel}
      destroyOnClose={true}
      closeIcon={false}
      maskClosable={false}
      keyboard={false}
      zIndex={2000}
      styles={{
        body: {
          height: 'calc(100vh - 146px)',
          padding: 0,
          overflowX: 'hidden'
        },
        content: {
          borderRadius: '6px 0 0 6px'
        }
      }}
      width={width}
      footer={
        <div>
          <ModalFooter
            extra={
              <Button
                onClick={handleShowAdvanceSettings}
                type="text"
                icon={<SettingOutlined></SettingOutlined>}
              ></Button>
            }
            onCancel={handleCancel}
            onOk={handleSumit}
            okText={intl.formatMessage({ id: 'common.button.deploy' })}
            style={{
              padding: '0px 8px',
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          ></ModalFooter>
        </div>
      }
    >
      <div style={{ display: 'flex', height: '100%' }}>
        {SEARCH_SOURCE.includes(props.source) && (
          <>
            <div style={{ display: 'flex', flex: 1 }}>
              <ColumnWrapper>
                <SearchResult
                  loading={dataSource.loading}
                  resultList={dataSource.repoOptions}
                  networkError={dataSource.networkError}
                  current={current}
                  source={source}
                  onSelect={handleOnSelectModel}
                ></SearchResult>
              </ColumnWrapper>
              <Separator></Separator>
            </div>
            <div style={{ display: 'flex', flex: 1 }}>
              <ColumnWrapper>
                <ModelCard
                  selectedModel={selectedModel}
                  onCollapse={setCollapsed}
                  collapsed={collapsed}
                  modelSource={props.source}
                  setIsGGUF={handleSetIsGGUF}
                  files={
                    isGGUF ? (
                      <HFModelFile
                        ref={modelFileRef}
                        selectedModel={selectedModel}
                        modelSource={props.source}
                        onSelectFile={handleSelectModelFile}
                        collapsed={collapsed}
                      ></HFModelFile>
                    ) : null
                  }
                ></ModelCard>
              </ColumnWrapper>
              <Separator></Separator>
            </div>
          </>
        )}
        <Modal
          open={showAdvanvce}
          onCancel={handleShowAdvanceSettings}
          footer={false}
          centered={true}
          styles={{
            body: {
              height: 'calc(100vh - 146px)',
              padding: 0,
              overflowX: 'hidden'
            },
            content: {
              borderRadius: '6px 0 0 6px'
            }
          }}
        >
          <ColumnWrapper footer={false} style={{ width: '100%' }}>
            <>
              {SEARCH_SOURCE.includes(source) && (
                <TitleWrapper>
                  {intl.formatMessage({ id: 'models.form.configurations' })}
                  <span style={{ display: 'flex', height: 24 }}></span>
                </TitleWrapper>
              )}
              <DataForm
                source={source}
                action={action}
                selectedModel={selectedModel}
                onOk={onOk}
                ref={form}
                isGGUF={isGGUF}
                onBackendChange={handleBackendChange}
              ></DataForm>
            </>
          </ColumnWrapper>
        </Modal>
      </div>
    </Drawer>
  );
};

export default AddModal;
