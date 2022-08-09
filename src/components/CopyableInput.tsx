import { Button, Input } from 'antd';
import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import md5 from 'md5';

const CopyableInput = ({
  label,
  value,
  readonly = true,
  style,
}: {
  readonly?: boolean;
  label?: string;
  value: string | number | undefined;
  style?: React.CSSProperties;
}): React.ReactElement => {
  const [id] = useState(md5(label ?? ''));
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied === true) {
      setTimeout(() => setIsCopied(false), 3000);
    }
  }, [isCopied]);

  return (
    <>
      {label ? (
        <div className="ant-form-item-label" style={{ marginTop: '0.5rem' }}>
          <label title={label} htmlFor={id}>
            {label}
          </label>
        </div>
      ) : null}
      <Input.Search
        style={style}
        id={id}
        readOnly={readonly}
        value={value}
        enterButton={<Button icon={isCopied === false ? <CopyOutlined /> : <CheckOutlined />} />}
        onSearch={() => {
          navigator.clipboard.writeText(JSON.stringify(value));
          setIsCopied(true);
        }}
      />
    </>
  );
};

export default CopyableInput;
