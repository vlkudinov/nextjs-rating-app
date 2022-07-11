import { DetailedHTMLProps, HTMLAttributes } from 'react';

export enum colorMapping {
  gray = 'gray',
  primary = 'primary',
  green = 'green',
  red = 'red',
}

export interface ChipProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: keyof typeof colorMapping;
  variant?: 'filled' | 'outlined';
  size?: 'm' | 's';
}
