import React from 'react';
import { OrganizationExtendedDto, OrganizationRole, RoleDetailsDto, UserDto } from '../services/axiosApiAppClient';
import { ProposalDto, OrganizationLevel } from '../services/apolloGraphqlAppClient/models/types';

export interface IRoutesMap {
  auth: { [key: string]: IRoute };
  app: { [key: string]: IRoute };
  admin: { [key: string]: IRoute };
}


export interface IRoute {
  id: string;
  url: string;
  title: string;
  hidden?: boolean;
  inactive?: boolean;
  requiresAuthorization?: string[];
  methods?: { [key: string]: (...rest) => any };
}



export const ROUTES_MAP: IRoutesMap = {
  auth: {
    auth: {
      id: 'auth',
      url: '/auth',
      title: 'Auth',
      hidden: true,
      inactive: true,
    },
    authLogin: {
      id: 'authLogin',
      url: '/login',
      title: 'Auth',
      hidden: true,
      inactive: true,
    },
  },
  app: {
    home: {
      id: 'home',
      url: '/',
      title: 'Home',
      hidden: true,
    },
    cropper: {
      id: 'cropper',
      url: '/cropper',
      title: 'Image Cropper',
    },
    textselector: {
      id: 'text-selector',
      url: '/text-selector',
      title: 'text-selector',
    },
  },
  admin: {
    //
  },
};
