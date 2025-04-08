import { convertFileSize } from '@/utils';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Tag, Tooltip } from 'antd';
import classNames from 'classnames';
import _ from 'lodash';
import React from 'react';
import 'simplebar-react/dist/simplebar.min.css';
import { getFileType } from '../config/file-type';
import '../style/hf-model-file.less';
import FileParts from './file-parts';
import IncompatiableInfo from './incompatiable-info';

interface ModelFileItemProps {
  data: Record<string, any>;
  isEvaluating: boolean;
  active: boolean;
  handleSelectModelFile: (item: any) => void;
  handleOnEnter: (e: any, item: any) => void;
}

const FilePartsTag = (props: { parts: any[] }) => {
  if (!props.parts || !props.parts.length) {
    return null;
  }
  const { parts } = props;
  return (
    <Tooltip
      overlayInnerStyle={{
        width: 180,
        padding: 0
      }}
      title={<FileParts fileList={parts}></FileParts>}
    >
      <Tag
        className="tag-item"
        color="purple"
        style={{
          marginRight: 0
        }}
      >
        <span style={{ opacity: 1 }}>
          <InfoCircleOutlined className="m-r-5" />
          {parts.length} parts
        </span>
      </Tag>
    </Tooltip>
  );
};

const ModelFileItem: React.FC<ModelFileItemProps> = (props) => {
  const {
    data: item,
    isEvaluating,
    active,
    handleSelectModelFile,
    handleOnEnter
  } = props;

  const getModelQuantizationType = (item: any) => {
    let path = item.path;
    if (item?.parts?.length) {
      path = `${item.path}.gguf`;
    }
    const quanType = getFileType(path);
    if (quanType) {
      return (
        <Tag
          className="tag-item"
          color="cyan"
          style={{
            marginRight: 0
          }}
        >
          {_.toUpper(quanType)}
        </Tag>
      );
    }
    return null;
  };

  return (
    <div
      className={classNames('hf-model-file', {
        active: active
      })}
      tabIndex={0}
      onClick={() => handleSelectModelFile(item)}
      onKeyDown={(e) => handleOnEnter(e, item)}
    >
      <div className="title">{item.path}</div>
      <div className="tags flex-between">
        <span className="flex-center gap-8">
          <Tag
            className="tag-item"
            color="green"
            style={{
              marginRight: 0
            }}
          >
            {convertFileSize(item.size)}
          </Tag>
          {getModelQuantizationType(item)}
          <FilePartsTag parts={item.parts}></FilePartsTag>
        </span>
        <IncompatiableInfo
          isEvaluating={isEvaluating}
          data={item.evaluateResult}
        ></IncompatiableInfo>
      </div>
    </div>
  );
};

export default ModelFileItem;
