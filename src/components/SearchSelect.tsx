import { Select, SelectProps, Spin } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useDebounce } from '../hooks';

export type ISearchSelectProps = SelectProps & {
  getOptions: any;
  debounceTimeout?: number;
  searchTrigger?: any;
};

const SearchSelect = ({
  getOptions,
  debounceTimeout = 200,
  searchTrigger,
  ...props
}: ISearchSelectProps): React.ReactElement => {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(0);

  useEffect(() => {
    handleSearch(searchTrigger);
  }, [searchTrigger]);

  const handleSearch = useDebounce((value) => {
    fetchRef.current += 1;
    const fetchId = fetchRef.current;
    setOptions([]);
    setFetching(true);
    getOptions(value).then((newOptions) => {
      if (fetchId !== fetchRef.current) {
        // for fetch callback order
        return;
      }
      setOptions(newOptions);
      setFetching(false);
    });
  }, debounceTimeout);

  return (
    <Select
      showSearch
      onSearch={!searchTrigger ? handleSearch : undefined}
      loading={fetching}
      notFoundContent={fetching ? <Spin size="small" /> : 'null'}
      options={options}
      {...props}
    />
  );
};

export default SearchSelect;
