import React from 'react';
import classNames from '../../../utils/classNames';
import styles from './Menu.module.scss';
import Space from '../../Space';
import { SpaceProps } from '../../Space/Space';

export type MenuProps = SpaceProps<'nav'>;

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { children, className, ...props },
  ref,
) {
  return (
    <Space
      ref={ref}
      element="nav"
      className={classNames(styles.container, className)}
      gap={16}
      direction="column"
      {...props}
    >
      {children}
    </Space>
  );
});

export default Menu;
