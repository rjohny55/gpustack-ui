import ModalFooter from '@/components/modal-footer';
import SealInput from '@/components/seal-form/seal-input';
import { PageActionType } from '@/config/types';
import { CopyOutlined, SyncOutlined } from '@ant-design/icons';
import { Form, Modal } from 'antd';

type AddModalProps = {
  title: string;
  action: PageActionType;
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
};
const AddModal: React.FC<AddModalProps> = ({
  title,
  action,
  open,
  onOk,
  onCancel
}) => {
  const [form] = Form.useForm();
  const Suffix = (
    <SyncOutlined
      style={{
        fontSize: 16,
        color: '#1677ff'
      }}
    />
  );
  const RenderCopyButton = () => {
    return <CopyOutlined></CopyOutlined>;
  };

  return (
    <Modal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      destroyOnClose={true}
      closeIcon={false}
      maskClosable={false}
      keyboard={false}
      width={600}
      styles={{}}
      footer={<ModalFooter onOk={onOk} onCancel={onCancel}></ModalFooter>}
    >
      <Form name="addAPIKey" form={form} onFinish={onOk}>
        <Form.Item name="name" rules={[{ required: true }]}>
          <SealInput.Input label="Display Name" required></SealInput.Input>
        </Form.Item>
        <Form.Item name="secretkey" rules={[{ required: true }]}>
          <SealInput.Input
            label="Secret Key"
            addonAfter={<RenderCopyButton></RenderCopyButton>}
          ></SealInput.Input>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddModal;
