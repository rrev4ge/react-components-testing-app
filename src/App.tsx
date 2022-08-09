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

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <AppContextProvider>
          <MobxAppClientProvider>
            <ApolloAppClientProvider>
              <BrowserRouter>
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
