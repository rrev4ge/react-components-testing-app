import { useState } from 'react';
import { PaginationProps } from 'antd';
import CONSTANTS from '../config/CONSTANTS';
import { useDidMountEffect, useHistoryProps } from './index';
import { SortOrder } from '../utils/historyHandlers';

export type TFilter<F> = F | any;
export type TSort<S> = S | any;
export type TPagination = PaginationProps & { skip: number; take: number };

export interface IHookResult<F, S> {
  filter?: TFilter<F>;
  sort?: TSort<S>;
  pagination: TPagination;
  handleChange: (...rest) => void;
  setPagination?: any;
}

const useBaseListProps = <F, S>(): IHookResult<F, S> => {
  const { historyProps, setHistoryProps } = useHistoryProps();

  const [filter, setFilter] = useState<TFilter<F>>(historyProps?.filter);
  const [sort, setSort] = useState<TSort<S>>(historyProps?.sort);
  const [pagination, setPagination] = useState<TPagination>({
    current:
      historyProps?.pagination?.skip && historyProps?.pagination?.take
        ? Math.round(historyProps.pagination.skip / historyProps.pagination.take + 1)
        : 1,
    pageSize: historyProps?.pagination?.take || CONSTANTS.APP_DEFAULT_LIST_SIZE,
    ...historyProps?.pagination,
    take: historyProps?.pagination?.take || CONSTANTS.APP_DEFAULT_LIST_SIZE,
    skip: historyProps?.pagination?.skip || 0,
    hideOnSinglePage: false,
  });

  const handleChange = (...rest) => {
    const [newPagination, newFilter, newSorter] = rest;
    if (newFilter) {
      setFilter({ ...filter, ...newFilter });
      setPagination({
        ...pagination,
        current: 1,
        skip: 0,
        take: pagination.pageSize!,
      });
    }
    if (newPagination) {
      const { current, pageSize } = newPagination;
      if (current && pageSize) {
        setPagination({
          ...pagination,
          current,
          pageSize,
          skip: ((current || 1) - 1) * (pageSize || 20),
          take: pageSize,
        });
      }
    }
    if (newSorter) {
      if (Array.isArray(newSorter)) {
        setSort(
          newSorter
            .filter((item) => item.order)
            .map((item) => {
              return {
                field: item.field
                  .split(/(?=[A-Z])/)
                  .join('_')
                  .toUpperCase(),
                order: item.order === 'ascend' ? SortOrder.Asc : SortOrder.Desc,
              };
            }),
        );
      } else if (newSorter.order) {
        setSort([
          {
            field: newSorter.field
              .split(/(?=[A-Z])/)
              .join('_')
              .toUpperCase(),
            order: newSorter.order === 'ascend' ? SortOrder.Asc : SortOrder.Desc,
          },
        ]);
      } else if (newSorter.order === undefined) {
        setSort([]);
      }
    }
  };

  useDidMountEffect(() => {
    setHistoryProps({ pagination, filter, sort });
  }, [pagination, filter, sort]);

  return { filter, sort, pagination, handleChange, setPagination };
};

export default useBaseListProps;
