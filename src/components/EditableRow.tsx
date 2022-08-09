import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form, Input } from 'antd';
import { observer } from 'mobx-react-lite';

const EditableContext = React.createContext(null);

export const EditableRow = observer(({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider
        // @ts-ignore
        value={form}
      >
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
});

export const EditableCell = observer(({ title, editable, children, dataIndex, record, handleSave, ...restProps }) => {
  const [editing, setEditing] = useState(false);
  const defaultValue = record?.[dataIndex] ?? '';
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      // @ts-ignore
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    // @ts-ignore
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async (e) => {
    // @ts-ignore
    form
      .validateFields()
      .then((values) => {
        toggleEdit();
        handleSave({ record, values });
      })
      .catch((e) => {
        setEditing(!editing);
        // @ts-ignore
        form.setFieldsValue({
          [dataIndex]: defaultValue,
        });
      });
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
          {
            pattern: /^[a-zA-Z@~`!#$%^&*()_=+';:"/?>.<,-]+$/i,
            message: 'field does not accept numbers',
          },
        ]}
      >
        <Input ref={inputRef} maxLength={5} minLength={1} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className={children[1] ? 'editable-cell-value-wrap' : 'editable-cell-null-wrap'}
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
});
