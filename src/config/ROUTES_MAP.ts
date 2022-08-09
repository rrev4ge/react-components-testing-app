import React from 'react';

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

const ROUTES_MAP: IRoutesMap = {
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
    imageCropper: {
      id: 'imageCropper',
      url: '/imageCropper',
      title: 'Image Cropper',
    },
    textSelector: {
      id: 'textSelector',
      url: '/textSelector',
      title: 'Text Selector',
    },
  },
  admin: {
    //
  },
};

export default ROUTES_MAP;
