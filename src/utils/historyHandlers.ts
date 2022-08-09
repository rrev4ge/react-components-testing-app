import queryString from 'query-string';

export enum SortOrder {
  Desc = 'Desc',
  Asc = 'Asc',
}

const getHistorySearchData = (
  history,
): {
  pagination: any;
  sort: any[];
  filter: { [key: string]: string | number | boolean | (string | boolean | number | null)[] | null };
} => {
  const params = queryString.parse(history.location.search, { parseBooleans: true }) || {};

  const setSort = () => {
    if (params?.orderBy) {
      const getParsedSort = (item) => ({
        field: item?.substring(0, 1) === '-' ? item?.substring(1) : item,
        order: item?.substring(0, 1) === '-' ? SortOrder.Desc : SortOrder.Asc,
      });
      if (Array.isArray(params?.orderBy)) {
        return params?.orderBy.map((item) => getParsedSort(item));
      }
      return [getParsedSort(params?.orderBy)];
    }
    return [];
  };

  return {
    pagination: {
      ...(typeof params?.take === 'string' ? { take: parseInt(params.take, 10) } : {}),
      ...(typeof params?.skip === 'string' ? { skip: parseInt(params.skip, 10) } : {}),
    },
    sort: setSort(),
    filter: Object.fromEntries(
      Object.entries(params).filter(([key, value]) => {
        return !['skip', 'take', 'orderBy'].includes(key);
      }),
    ),
  };
};

const setHistorySearchData = ({ pagination, filter, sort }, history) => {
  const orderBy = sort?.map((item) => {
    return item.order === SortOrder.Asc ? item.field : `-${item.field}`;
  });
  const paging = {
    ...(pagination?.take ? { take: pagination.take } : {}),
    ...(pagination?.skip ? { skip: pagination.skip } : {}),
  };
  const params = { ...paging, ...filter, orderBy };
  const paramsStringify = `?${queryString.stringify(params, {
    skipEmptyString: true,
    skipNull: true,
  })}`;
  history.push({
    search: paramsStringify,
  });
};

export default { getHistorySearchData, setHistorySearchData };
