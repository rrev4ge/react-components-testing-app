import { Input } from 'antd';
import React, { useState } from 'react';
import md5 from 'md5';

export function FixedTextAreaInput({
  label,
  value = '',
  readOnly = false,
  autoSize = { minRows: 5, maxRows: 5 },
  onChange = () => null,
}: {
  readOnly?: boolean;
  label?: string;
  value?: string;
  autoSize?: { [key: string]: string | number };
  onChange?: (values: unknown) => void;
}): React.ReactElement {
  const [id] = useState(md5(label ?? ''));
  return (
    <>
      {label ? (
        <div className="ant-form-item-label" style={{ marginTop: '0.5rem' }}>
          <label title={label} htmlFor={id}>
            {label}
          </label>
        </div>
      ) : null}
      <Input.TextArea id={id} autoSize={autoSize} readOnly={readOnly} value={value} onChange={onChange} />
    </>
  );
}
