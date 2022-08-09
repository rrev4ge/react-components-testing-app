import React from 'react';
import { AuthProvider, AuthService } from 'react-oauth2-pkce-btoa';
import CONSTANTS from '../config/CONSTANTS';

const authService = new AuthService({
  clientId: CONSTANTS.APP_API_CLIENT_ID,
  location: window.location,
  provider: CONSTANTS.APP_API_SESSION_PROVIDER,
  authorizeEndpoint: CONSTANTS.APP_API_SESSION_ACCESS_URL,
  logoutEndpoint: CONSTANTS.APP_API_SESSION_ACCESS_URL,
  tokenEndpoint: CONSTANTS.APP_API_SESSION_TOKEN_URL,
  redirectUri: window.location.origin,
  scopes: CONSTANTS.APP_API_SESSION_ACCESS_SCOPES,
  autoRefresh: true,
});

const AuthenticationProvider = ({ children }) => {
  return <AuthProvider authService={authService}>{children}</AuthProvider>;
};

export default AuthenticationProvider;
