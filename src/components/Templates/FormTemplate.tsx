import React, { CSSProperties } from 'react';
import { Card, Divider, Form, FormProps, Space } from 'antd';
import { IPageTemplateProps } from './PageTemplate';

type Store = { [name: string]: any };

export interface FormTemplateProps extends FormProps {
  buttons?: React.ReactElement[] | React.ReactElement;
  loading?: boolean;
  children?: React.ReactNode;
  isFlex?: boolean;
  initialValues?: Store | any;
  layout?: 'vertical' | 'horizontal';
  labelCol?: { [key: string]: string | number | undefined };
  wrapperCol?: { [key: string]: string | number | undefined };
  wrapperItem?: { span: string | number | undefined; offset: string | number | undefined };
  style?: CSSProperties | undefined;
}

const FormTemplate = (props: FormTemplateProps): React.ReactElement => {
  const [defForm] = Form.useForm();
  const {
    layout,
    labelCol,
    wrapperItem,
    wrapperCol,
    children,
    buttons,
    loading,
    form = defForm,
    isFlex,
    style,
    ...rest
  } = props;

  return (
    <Card loading={loading} style={style}>
      <Form
        className={isFlex ? 'app-form-template' : ''}
        form={form}
        layout={layout || 'horizontal'}
        labelCol={labelCol || { span: 8 }}
        wrapperCol={wrapperCol || { span: 16 }}
        {...rest}
      >
        {children}
        {buttons ? (
          <>
            <Divider type="horizontal" />
            <Form.Item
              wrapperCol={
                wrapperItem || {
                  span: 16,
                  offset: 8,
                }
              }
            >
              <Space>{buttons}</Space>
            </Form.Item>
          </>
        ) : null}
      </Form>
    </Card>
  );
};

export default FormTemplate;
