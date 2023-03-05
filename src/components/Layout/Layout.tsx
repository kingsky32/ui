import React from 'react';
import classNames from '../../utils/classNames';
import styles from './Layout.module.scss';

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(function Layout(
  { children, className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={classNames(styles.container, className)}
      {...props}
    >
      {children}
    </div>
  );
});

export default Layout;
