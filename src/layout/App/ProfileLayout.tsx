import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React, { useEffect } from 'react';
import { useAuth } from 'react-oauth2-pkce-btoa';
import { MenuTemplate } from '../../components';
import { ProfileMenu } from '../../config/Menus';
import { urls } from '../../services/restApiAppClient/restApiAppClient';
import { useAppContext } from '../../providers/AppContextProvider';

const ProfileLayout = (): React.ReactElement => {
  const { authService } = useAuth();
  const { authProfile } = useAppContext();

  return (
    <Dropdown
      overlay={
        <MenuTemplate
          list={ProfileMenu}
          onClick={({ key }) => {
            if (key === 'password') {
              authService.profile('password');
              return;
            }
            if (key === 'logout') {
              authService.logout();
              return;
            }
            authService[key]();
          }}
        />
      }
      className="app-header--profile-dropdown"
      placement="bottomRight"
    >
      <div className="">
        {authProfile && (
          <img
            alt={`${authProfile?.firstName} ${authProfile?.lastName}`}
            src={`${urls.users}/${authProfile?.userId}/avatar?w=32`}
            className="app-header--avatar ant-avatar ant-avatar-circle ant-avatar-icon ant-avatar-image"
            style={{
              width: '32px',
              height: '32px',
              lineHeight: '32px',
            }}
          />
        )}
        <span className="app-header--username" style={{ lineHeight: '32px' }}>
          <Space>
            <Space direction="vertical" size={0} style={{ lineHeight: '28px' }}>
              <div>{`${authProfile?.firstName} ${authProfile?.lastName}`}</div>
              <div style={{ fontSize: 14 }}>
                {authProfile?.organizationId}{' '}
                {authProfile?.roles && authProfile?.roles?.length > 0
                  ? authProfile?.roles[0].split(/(?=[A-Z])/).join(' ')
                  : null}
              </div>
            </Space>
            <DownOutlined className="app-header--username" />
          </Space>
        </span>
      </div>
    </Dropdown>
  );
};

export default ProfileLayout;
