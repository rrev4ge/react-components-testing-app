import ErrorStore from './ErrorStore';
import HistoryStore from './HistoryStore';

class RootStore {
  errorStore: ErrorStore;

  historyStore: HistoryStore;

  constructor() {
    this.errorStore = new ErrorStore(this);
    this.historyStore = new HistoryStore(this);
  }
}

export default RootStore;
