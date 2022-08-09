import React from 'react';
import { Layout } from 'antd';
import { MenuTemplate } from '../../components';
import { MENUS_MAP } from '../../config';

const SiderLayout = ({ collapsedActions }): React.ReactElement => {
  const { SIDEBAR_MENU } = MENUS_MAP;
  const { collapsed, manualCollapsed, setManualCollapsed } = collapsedActions;

  return (
    <>
      {/* <Button */}
      {/*  className="app-layout-sider-zero-width-trigger" */}
      {/*  icon={manualCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} */}
      {/*  onClick={() => { */}
      {/*    setManualCollapsed(!manualCollapsed); */}
      {/*  }} */}
      {/* /> */}
      <Layout.Sider
        collapsedWidth={50}
        collapsed={collapsed}
        collapsible
        onCollapse={() => setManualCollapsed(!manualCollapsed)}
      >
        <MenuTemplate list={SIDEBAR_MENU} />
      </Layout.Sider>
    </>
  );
};

export default SiderLayout;
