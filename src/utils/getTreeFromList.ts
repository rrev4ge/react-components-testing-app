interface IOptions {
  idKey: string;
  parentKey: string;
  childrenKey?: string;
  childCountKey?: string | number;
  hasRootKeys?: boolean;
}

const getTreeFromList = (data, options: IOptions) => {
  const ID_KEY = options.idKey || 'id';
  const PARENT_KEY = options.parentKey || 'parent';
  const CHILDREN_KEY = options.childrenKey || 'children';
  const CHILD_COUNT_KEY = options.childCountKey || 'childCount';
  const hashTable = Object.create(null);
  data.forEach((aData) => {
    hashTable[aData[ID_KEY]] = {
      ...aData,
      ...(!aData.key ? { key: aData[ID_KEY] } : {}),
      ...(aData[CHILD_COUNT_KEY] > 0 ? { [`${CHILDREN_KEY}`]: [] } : {}),
    };
  });
  const dataTree = [];
  data.forEach((aData) => {
    if (aData[PARENT_KEY] && hashTable[aData[PARENT_KEY]]?.[CHILDREN_KEY]) {
      hashTable[aData[PARENT_KEY]][CHILDREN_KEY].push(hashTable[aData[ID_KEY]]);
    } else {
      // @ts-ignore
      dataTree.push(hashTable[aData[ID_KEY]]);
    }
  });
  return dataTree;
};

export default getTreeFromList;
