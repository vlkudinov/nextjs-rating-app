import React from 'react';
import cn from 'classnames';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

const Header: React.FC<HeaderProps> = ({ ...props }): JSX.Element => {
  return <div {...props}>Header</div>;
};

export { Header };
