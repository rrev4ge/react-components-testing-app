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

export const SidebarMenu: TMenu[] = [
  {
    key: '/',
    path: '/',
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: 'lists',
    icon: <UnorderedListOutlined />,
    label: 'Lists',
    children: [
      {
        key: '/translations',
        path: '/translations',
        label: <Link to="/translations">Translations</Link>,
      },
      {
        key: '/paragraphs',
        path: '/paragraphs',
        label: <Link to="/paragraphs">Paragraphs</Link>,
      },
      {
        key: '/countries',
        path: '/countries',
        label: <Link to="/countries">Countries</Link>,
      },
      {
        key: '/languages',
        path: '/languages',
        label: <Link to="/languages">Languages</Link>,
      },
      {
        key: '/organizations',
        path: '/organizations',
        label: <Link to="/organizations">Organizations</Link>,
      },
      {
        key: '/publications',
        path: '/organizations',
        label: <Link to="/publications">Publications</Link>,
      },
    ],
  },
];

export const ProfileMenu: TMenu[] = [
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
