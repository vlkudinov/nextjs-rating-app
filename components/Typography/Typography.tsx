import React from 'react';
import styles from './Typography.module.css';
import { variantMapping, TypographyProps } from './Typography.props';

const Typography: React.FC<TypographyProps> = ({
  variant = 'h3',
  children,
  ...props
}): JSX.Element =>
  React.createElement(
    variantMapping[variant],
    { ...props, className: styles[variant] },
    children
  );

export { Typography };
