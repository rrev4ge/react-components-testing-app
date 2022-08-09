import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './themes';
import RootRouter from './routes/RootRouter';
import {
  ApolloAppClientProvider,
  AppContextProvider,
  AuthenticationProvider,
  MobxAppClientProvider,
} from './providers';
import { CONSTANTS } from './config';

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <AppContextProvider>
          <MobxAppClientProvider>
            <ApolloAppClientProvider>
              <BrowserRouter basename={CONSTANTS.APP_ROOT_URL}>
                <RootRouter />
              </BrowserRouter>
            </ApolloAppClientProvider>
          </MobxAppClientProvider>
        </AppContextProvider>
      </AuthenticationProvider>
    </ThemeProvider>
  );
};

export default App;
