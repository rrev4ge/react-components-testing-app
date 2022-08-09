import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import { TMenu } from '../../config/Menus';
import { useAppContext } from '../../providers/AppContextProvider';

function findRoot(menu: any, path: string): string | undefined {
  for (let i = 0; i < menu.length; i++) {
    const root = menu[i];
    if (root.path === path) {
      return root.key;
    }
    if (root.children) {
      for (let j = 0; j < root.children.length; j++) {
        const menuItem = root.children[j];
        if (menuItem.path === path) {
          return root.key;
        }
      }
    }
  }
  return undefined;
}

const isInGroup = (requiredRoles: string[], userRoles: string[]): boolean => {
  if (requiredRoles.length === 0) {
    return true;
  }
  return !!requiredRoles.find((role) => userRoles.includes(role));
};

export interface IMenuTemplateProps extends MenuProps {
  list: TMenu[];
}

const MenuTemplate = (props: IMenuTemplateProps): React.ReactElement => {
  const { list } = props;
  const history = useHistory();
  const { authProfile, setApiError } = useAppContext();
  const [selected, setSelected] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string[]>([]);

  const onOpenChange = (e: any) => {
    setExpanded([e[e.length - 1]]);
    setApiError(null);
  };

  useEffect(() => {
    const openPath = () => {
      const path = history.location.pathname;
      const parse = path.substring(path.indexOf('/'), path.length);
      if (path.length > 0 && selected[0] !== parse) {
        setSelected([parse]);
      }
      const root = findRoot(list, parse);
      if (root && !expanded.includes(root)) {
        setExpanded([root]);
      }
    };
    openPath();
    return history.listen(openPath);
  }, [selected]);

  return (
    <Menu
      items={list.filter((group) => isInGroup(group.roles ?? [], authProfile?.roles ?? []))}
      mode="inline"
      theme="dark"
      selectedKeys={selected}
      openKeys={expanded}
      onOpenChange={onOpenChange}
      {...props}
    />
  );
};

export default MenuTemplate;
