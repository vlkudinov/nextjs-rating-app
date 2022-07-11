import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

const Button: React.FC<ButtonProps> = ({
  appearance,
  startIcon,
  endIcon,
  children,
  className,
  ...props
}): JSX.Element => {
  const classNames = cn(styles.button, {
    [styles.primary]: appearance === 'primary',
    [styles.ghost]: appearance === 'ghost',
  });

  return (
    <button className={classNames} {...props}>
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </button>
  );
};

export { Button };
