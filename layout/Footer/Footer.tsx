import React from 'react';
import cn from 'classnames';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';

const Footer: React.FC<FooterProps> = ({
  className,
  ...props
}): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <span>OwlTop © 2020 - 2021 Все права защищены</span>
      <a href="#">Пользовательское соглашение</a>
      <a href="#">Политика конфиденциальности</a>
    </footer>
  );
};

export { Footer };
