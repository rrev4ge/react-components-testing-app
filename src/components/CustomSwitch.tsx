import React, { useState } from 'react';
import { Switch } from 'antd';
import { SwitchChangeEventHandler, SwitchClickEventHandler, SwitchSize } from 'antd/lib/switch';

const CustomSwitch = (props: {
  prefixCls?: string;
  size?: SwitchSize;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  autoFocus?: boolean;
  style?: React.CSSProperties;
  title?: string;
  tabIndex?: number;
  id?: string;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  className?: string;
  classNameChecked?: string;
  onChange?: SwitchChangeEventHandler;
  onClick?: SwitchClickEventHandler;
}): React.ReactElement => {
  const {
    prefixCls,
    size,
    checked,
    defaultChecked,
    disabled,
    loading,
    autoFocus,
    style,
    title,
    tabIndex,
    id,
    checkedChildren,
    unCheckedChildren,
    className,
    classNameChecked,
    onChange,
    onClick,
  } = props;

  const [classes, setClasses] = useState(defaultChecked ? classNameChecked : className);

  return (
    <Switch
      {...{
        prefixCls,
        size,
        checked,
        defaultChecked,
        disabled,
        loading,
        autoFocus,
        style,
        title,
        tabIndex,
        id,
        checkedChildren,
        unCheckedChildren,
        className: classes,
        onChange: (checked, event) => {
          setClasses(checked && classNameChecked ? classNameChecked : className);
          onChange && onChange(checked, event);
        },
        onClick: (checked, event) => {
          setClasses(checked && classNameChecked ? classNameChecked : className);
          onClick && onClick(checked, event);
        },
      }}
    />
  );
};

export default CustomSwitch;
