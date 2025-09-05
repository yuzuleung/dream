import React from 'react';
import styles from './ScrollArea.module.scss';

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({ className = '', ...props }) => (
  <div className={`${styles.root} ${className}`} {...props} />
);
