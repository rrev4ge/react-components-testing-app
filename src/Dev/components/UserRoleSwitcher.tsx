import React from 'react';
import { Form, Select } from 'antd';
import { useAppContext } from '../../providers/AppContextProvider';
import { OrganizationRole } from '../../services/axiosApiAppClient';

const MyComponent = () => {
  const { authProfile } = useAppContext();
  return (
    <Form.Item label="Roles(DEV)" style={{ color: '#FFFFFFA5', flexWrap: 'nowrap', width: 400 }}>
      <Select
        mode="multiple"
        style={{ width: 300 }}
        defaultValue={authProfile?.roles}
        placeholder="Input roles"
        showArrow
        allowClear
        onChange={(values) => {
          console.log({ values });
        }}
      >
        {(Object.keys(OrganizationRole) as Array<keyof typeof OrganizationRole>).map((key) => {
          return <Select.Option key={OrganizationRole[key]}>{key}</Select.Option>;
        })}
      </Select>
    </Form.Item>
  );
};

export default MyComponent;
