import { Layout } from 'antd';
import React from 'react';
import LogoLayout from './LogoLayout';
import ProfileLayout from './ProfileLayout';
import { ThemeSwitcher } from '../../themes';
import { FlexListTemplate } from '../../components';

const HeaderLayout = (): React.ReactElement => (
  <Layout.Header>
    <div className="app-header--root">
      <div className="app-header--logo">
        <LogoLayout />
      </div>
      <FlexListTemplate flexWrap="nowrap" gap={10} justifyContent="right">
        <ThemeSwitcher />
        {/* <ProfileLayout /> */}
      </FlexListTemplate>
    </div>
  </Layout.Header>
);

export default HeaderLayout;
