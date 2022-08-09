import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import LogoLayout from '../App/LogoLayout';
import { ThemeSwitcher } from '../../themes';
import { FlexListTemplate } from '../../components';

const AuthLayout = ({ children, ...rest }) => {
  const now = new Date();
  return (
    <>
      <Layout.Header>
        <div className="app-header--root">
          <div className="app-header--logo">
            <LogoLayout />
          </div>
          <FlexListTemplate flexWrap="nowrap" gap={10} justifyContent="right">
            <ThemeSwitcher />
          </FlexListTemplate>
        </div>
      </Layout.Header>
      <Layout>{children}</Layout>
      <Layout.Footer>
        <div className="app-app-footer">
          <div className="app-app-footer--copyright">Copyright © {now.getFullYear()} Ellen G. White ® Estate</div>
          <div>
            <Link to="/">Home</Link>
          </div>
        </div>
      </Layout.Footer>
    </>
  );
};

export default AuthLayout;
