import React from 'react';
import { Switch } from 'antd';
import { useTheme } from '../hooks';

const ThemeSwitcher = (): React.ReactElement => {
  const [theme, setTheme] = useTheme();

  // const classNames = darkMode ? 'switchDarkTheme' : 'switchLightTheme';

  return (
    <Switch
      checkedChildren={<div style={{ fontSize: '1.5em' }}>🌜</div>}
      unCheckedChildren={<div style={{ fontSize: '1.5em' }}>🌞</div>}
      onChange={(checked) => {
        const newTheme = checked ? 'dark' : 'light';
        setTheme(newTheme);
      }}
      defaultChecked={theme === 'dark'}
    />
  );
};

export default ThemeSwitcher;
