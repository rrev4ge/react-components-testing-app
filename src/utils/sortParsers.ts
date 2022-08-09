import { SortOrder } from '../services/apolloGraphqlAppClient/models/types';

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

// setSorter = (sorter) => {
//   const newSorter = (item) => {
//     if (item.substr(0, 1) === '-') {
//       this.sorter[item.substr(1)] = {
//         columnKey: item.substr(1),
//         field: item.substr(1),
//         order: 'descend',
//       };
//     } else {
//       this.sorter[item] = {
//         columnKey: item,
//         field: item,
//         order: 'ascend',
//       };
//     }
//   };
//   if (Array.isArray(sorter)) {
//     sorter.forEach((item) => {
//       newSorter(item);
//     });
//   } else {
//     newSorter(sorter);
//   }
// };

export default { getTableFieldOrder, getOrderBy4OpenApi };
