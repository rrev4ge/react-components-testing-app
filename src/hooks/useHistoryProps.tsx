import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { historyHandlers } from '../utils';

const useHistoryProps = (): { [key: string]: any } => {
  const history = useHistory();
  const [historyProps, setHistoryProps] = useState(() => historyHandlers.getHistorySearchData(history));

  useEffect(() => {
    historyHandlers.setHistorySearchData(historyProps, history);
  }, [historyProps]);

  return { historyProps, setHistoryProps };
};

export default useHistoryProps;
