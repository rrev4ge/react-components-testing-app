import { SortOrder } from './historyHandlers';

const getTableFieldOrder = (field: string, sort: any): 'ascend' | 'descend' | undefined => {
  const FIELD = field
    .split(/(?=[A-Z])/)
    .join('_')
    .toUpperCase();
  const newOrder = sort?.find((item) => item.field === FIELD)?.order;
  if (newOrder === SortOrder.Desc) {
    return 'descend';
  }
  if (newOrder === SortOrder.Asc) {
    return 'ascend';
  }
  return undefined;
};

const getOrderBy4OpenApi = (sort) => {
  return sort
    ?.map((item) => {
      if (item?.order) {
        return item.order === SortOrder.Asc ? item.field : `-${item.field}`;
      }
      return null;
    })
    .filter((item) => item !== null || item !== undefined);
};

export default { getTableFieldOrder, getOrderBy4OpenApi };
