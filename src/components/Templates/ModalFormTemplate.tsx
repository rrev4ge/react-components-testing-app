import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, FormInstance, FormProps, Modal, ModalProps } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import { IPageTemplateProps } from './PageTemplate';

type Store = { [name: string]: any };

export interface IModalFormTemplateProps extends IPageTemplateProps, ModalProps {
  callerProps?: ButtonProps;
  formProps?: FormProps;
  title?: React.ReactNode;
  form?: FormInstance;
  onFinish?: (values: unknown, form?: FormInstance) => Promise<void>;
  okText?: string;
  cancelText?: string;
  isFlex?: boolean;
  initialValues?: Store;
  layout?: 'vertical' | 'horizontal';
}

const ModalFormTemplate = (props: IModalFormTemplateProps): React.ReactElement => {
  const [defForm] = Form.useForm();

  const {
    onFinish,
    layout,
    initialValues,
    children,
    footer,
    loading,
    form = defForm,
    okText = 'Create',
    cancelText = 'Cancel',
    isFlex,
    title,
    callerProps,
    formProps,
    ...rest
  } = props;

  const [visible, setVisible] = useState<boolean>(false);

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const handleFinish = () => {
    form.validateFields().then((values) => {
      if (onFinish) {
        onFinish(values, defForm).then(() => {
          form.resetFields();
          setVisible(false);
        });
      }
    });
  };

  return (
    <>
      <Button
        {...{
          ...callerProps,
          title: callerProps?.title || 'Modal Form',
        }}
        onClick={() => setVisible(true)}
      >
        {callerProps?.title || 'Modal Form'}
      </Button>
      <Modal
        visible={visible}
        onOk={handleFinish}
        onCancel={handleCancel}
        okText={okText}
        cancelText={cancelText}
        title={title}
        destroyOnClose
        {...rest}
      >
        <Form form={form} initialValues={initialValues} {...formProps}>
          {children}
        </Form>
      </Modal>
    </>
  );
};

export default ModalFormTemplate;
