import React from 'react';
import classNames from '../../../utils/classNames';
import styles from './Item.module.scss';

export type MenuItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const MenuItem = React.forwardRef<HTMLAnchorElement, MenuItemProps>(
  function MenuItem({ children, className, ...props }, ref) {
    return (
      <a ref={ref} className={classNames(styles.item, className)} {...props}>
        {children}
      </a>
    );
  },
);

export default MenuItem;
