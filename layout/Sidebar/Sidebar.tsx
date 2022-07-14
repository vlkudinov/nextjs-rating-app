import React from 'react';
import cn from 'classnames';
import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.props';

const Sidebar: React.FC<SidebarProps> = ({ ...props }): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};

export { Sidebar };
