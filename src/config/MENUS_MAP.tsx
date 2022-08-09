import React from 'react';
import Icon, { CodeOutlined, HomeOutlined, UnorderedListOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { ReactComponent as SelectOutlined } from '../assets/images/SelectOutlined.svg';
import { ReactComponent as LogOutOutlined } from '../assets/images/LogOutOutlined.svg';
import { ReactComponent as ProposalOutlined } from '../assets/images/ProposalOutlined.svg';

export type TMenu = ItemType & {
  className?: string;
  path?: string;
  roles?: string[];
  children?: TMenu[];
};

const SIDEBAR_MENU: TMenu[] = [
  {
    key: '/',
    path: '/',
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: 'applications',
    icon: <UnorderedListOutlined />,
    label: 'Applications',
    children: [
      {
        key: '/imageCropper',
        path: '/imageCropper',
        label: <Link to="/imageCropper">Image Cropper</Link>,
      },
      {
        key: '/textSelector',
        path: '/textSelector',
        label: <Link to="/textSelector">Text Selector</Link>,
      },
    ],
  },
];

const PROFILE_MENU: TMenu[] = [
  {
    key: 'profile',
    label: 'Profile',
    icon: <Icon component={SelectOutlined} />,
  },
  {
    key: 'password',
    icon: <Icon component={SelectOutlined} />,
    label: 'Change password',
  },
  {
    key: 'preLogout',
    type: 'divider',
  },
  {
    key: 'logout',
    danger: true,
    icon: <Icon component={LogOutOutlined} />,
    label: 'Log Out',
  },
];

export default { PROFILE_MENU, SIDEBAR_MENU };
