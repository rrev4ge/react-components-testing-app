import React, { useMemo, createContext, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { RootStore } from '../stores';

export const StoreContext = createContext<RootStore | undefined>(undefined);
StoreContext.displayName = 'StoreContext';

export const useMobxStoreContext = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }
  return context;
};

let rootStore: RootStore;

const MobxAppClientProvider = observer(({ children }) => {
  const root = useMemo(() => {
    return rootStore ?? new RootStore();
  }, []);

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
});

export default MobxAppClientProvider;
