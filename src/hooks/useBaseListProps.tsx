import { useState } from 'react';
import { PaginationProps } from 'antd';
import CONSTANTS from '../config/CONSTANTS';
import { Scalars, SortOrder } from '../services/apolloGraphqlAppClient/models/types';
import { useDidMountEffect, useHistoryProps } from './index';

export type TFilter<F> = F | any;
export type TSort<S> = S | any;
export type TPagination = PaginationProps & { skip: Scalars['Int']; take: Scalars['Int'] };

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
    ROUTESize: historyProps?.pagination?.take || CONSTANTS.APP_DEFAULT_LIST_SIZE,
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
        take: pagination.ROUTESize!,
      });
    }
    if (newPagination) {
      const { current, ROUTESize } = newPagination;
      if (current && ROUTESize) {
        setPagination({
          ...pagination,
          current,
          ROUTESize,
          skip: ((current || 1) - 1) * (ROUTESize || 20),
          take: ROUTESize,
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
