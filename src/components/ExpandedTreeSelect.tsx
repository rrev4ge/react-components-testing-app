import { TreeSelect } from 'antd';
import React, { useEffect, useState } from 'react';
import { TreeSelectProps } from 'antd/lib/tree-select';
import type { DefaultOptionType } from 'rc-tree-select/lib/TreeSelect';
import { useDidMountEffect } from '../hooks';

// export interface ITreeData {
//   key: string | null;
//   value: string | null;
//   title: string | null;
//   id: string | null;
//   pId: string | null;
//   isLeaf?: boolean;
//   disabled?: boolean;
// }

export type IExpandedTreeSelectProps = TreeSelectProps & {
  defaultFetchProps: Record<string, any>;
  setChildFetchProps: (item) => Record<string, any>;
  getOptions?: (options) => any;
  fetchData: (callback: (data) => void, params: Record<string, any>, treeData) => Promise<void>;
};

const ExpandedTreeSelect = (props: IExpandedTreeSelectProps): React.ReactElement => {
  const {
    setChildFetchProps,
    defaultFetchProps = null,
    getOptions = (options) => undefined,
    fetchData,
    ...rest
  } = props;
  const [treeLoadedKeys, setTreeLoadedKeys] = useState<string[]>([]);
  const [treeData, setTreeData] = useState<DefaultOptionType[]>([]);

  useEffect(() => {
    fetchData((data) => setNewData(data), defaultFetchProps || {}, null);
    return () => setTreeData([]);
  }, []);

  useDidMountEffect(() => {
    resetData();
  }, [defaultFetchProps]);

  useEffect(() => {
    getOptions(treeData);
  }, [treeData]);

  const loadData = async (node) => {
    const params = setChildFetchProps(node) || {};
    await fetchData((data) => setNewData(data), params, treeData).then(() => {
      setTreeLoadedKeys([...treeLoadedKeys, node.key]);
    });
  };

  const resetData = async () => {
    await fetchData((data) => setNewData(data, true), defaultFetchProps || {}, treeData).then(() => {
      setTreeLoadedKeys([]);
    });
  };

  const setNewData = (data, resetData = false) => {
    setTreeData([...(resetData ? [] : treeData), ...data.filter((i) => treeData.every((j) => j.key !== i.key))]);
  };

  return (
    <TreeSelect
      treeDataSimpleMode
      style={{
        minWidth: 250,
      }}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      loadData={loadData}
      treeLoadedKeys={treeLoadedKeys}
      treeData={treeData}
      {...rest}
    />
  );
};

export default ExpandedTreeSelect;
