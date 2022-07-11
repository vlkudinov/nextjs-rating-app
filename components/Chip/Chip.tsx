import React from 'react';
import cn from 'classnames';
import styles from './Chip.module.scss';
import { ChipProps } from './Chip.props';

const Chip: React.FC<ChipProps> = ({
  variant = 'filled',
  color = 'gray',
  size= 'm',
  children
}): JSX.Element => {
  const classNames = cn(styles.chip, styles[color], styles[variant], styles[size]);

  return (
    <div className={classNames}>
      <span className={`${styles['chip-text']}`}>{children}</span>
    </div>
  );
};

export { Chip };
