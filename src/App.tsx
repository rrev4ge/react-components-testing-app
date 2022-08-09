import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './themes';
import RootRouter from './routes/RootRouter';
import MobxAppClientProvider from './providers/MobxAppClientProvider';
import ApolloAppClientProvider from './providers/ApolloAppClientProvider';
import AuthenticationProvider from './providers/AuthhenticationProvider';
import { AppContextProvider } from './providers/AppContextProvider';

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
