import FieldComponent from '@/components/seal-form/field-component';
import SealSelect from '@/components/seal-form/seal-select';
import { useIntl } from '@umijs/max';
import { Form } from 'antd';
import _ from 'lodash';
import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo
} from 'react';
import { ParamsSchema } from '../config/types';

type ParamsSettingsProps = {
  ref?: any;
  parametersTitle?: React.ReactNode;
  showModelSelector?: boolean;
  modelList: Global.BaseOption<string>[];
  onValuesChange?: (changeValues: any, value: Record<string, any>) => void;
  paramsConfig?: ParamsSchema[];
  initialValues?: Record<string, any>;
  extra?: React.ReactNode;
};

const ParamsSettings: React.FC<ParamsSettingsProps> = forwardRef(
  (
    {
      onValuesChange,
      parametersTitle,
      initialValues,
      paramsConfig,
      modelList,
      showModelSelector = true,
      extra
    },
    ref
  ) => {
    const intl = useIntl();
    const [form] = Form.useForm();
    const formId = useId();

    const dependFieldsValue = Form.useWatch(
      paramsConfig?.flatMap((item) => item.dependencies || []),
      form
    );

    useImperativeHandle(ref, () => ({
      form
    }));

    useEffect(() => {
      form.setFieldsValue({
        ...initialValues
      });
    }, [initialValues]);

    const handleOnFinish = (values: any) => {
      console.log('handleOnFinish', values);
    };

    const handleOnFinishFailed = (errorInfo: any) => {
      console.log('handleOnFinishFailed', errorInfo);
    };

    const handleValuesChange = useCallback(
      (changedValues: any, allValues: any) => {
        const normalizedValues = Object.fromEntries(
          Object.entries(changedValues).map(([key, value]: [string, any]) => [
            key,
            value?.target?.checked ?? value?.target?.value ?? value
          ])
        );
        form.setFieldsValue(normalizedValues);
        onValuesChange?.(normalizedValues, {
          ...allValues,
          ...normalizedValues
        });
      },
      [onValuesChange]
    );

    const renderFields = useMemo(() => {
      if (!paramsConfig) {
        return null;
      }
      console.log('renderFields---------');
      const formValues = form?.getFieldsValue();
      return paramsConfig?.map((item: ParamsSchema) => {
        return (
          <Form.Item
            name={item.name}
            rules={item.rules}
            key={item.name}
            {...item.formItemAttrs}
          >
            <FieldComponent
              disabled={
                item.disabledConfig
                  ? item.disabledConfig?.when?.(formValues)
                  : item.disabled
              }
              description={
                item.description?.isLocalized
                  ? intl.formatMessage({ id: item.description.text })
                  : item.description?.text
              }
              onChange={null}
              {..._.omit(item, [
                'name',
                'rules',
                'formItemAttrs',
                'dependencies',
                'disabledConfig',
                'description'
              ])}
            ></FieldComponent>
          </Form.Item>
        );
      });
    }, [paramsConfig, intl, dependFieldsValue]);

    return (
      <Form
        name={formId}
        form={form}
        onValuesChange={handleValuesChange}
        onFinish={handleOnFinish}
        onFinishFailed={handleOnFinishFailed}
      >
        <div>
          {
            <>
              <h3 className="m-b-20 m-l-10 font-size-14 line-24">
                {parametersTitle || (
                  <span>
                    {intl.formatMessage({ id: 'playground.parameters' })}
                  </span>
                )}
              </h3>
              <Form.Item
                name="model"
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage(
                      {
                        id: 'common.form.rule.select'
                      },
                      { name: intl.formatMessage({ id: 'playground.model' }) }
                    )
                  }
                ]}
              >
                <SealSelect
                  showSearch={true}
                  options={modelList}
                  label={intl.formatMessage({ id: 'playground.model' })}
                ></SealSelect>
              </Form.Item>
            </>
          }
          {renderFields}
          {extra}
        </div>
      </Form>
    );
  }
);

export default memo(ParamsSettings);
