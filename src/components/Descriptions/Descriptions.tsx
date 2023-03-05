import React from 'react';
import classNames from '../../utils/classNames';
import styles from './Descriptions.module.scss';
import Space from '../Space';
import { SpaceProps } from '../Space/Space';

export interface DescriptionsProps extends SpaceProps<'ul'> {
  children?: React.ReactNode;
}

export default function Descriptions({
  children,
  className,
  ...props
}: DescriptionsProps) {
  return (
    <Space
      element="ul"
      direction="column"
      gap={16}
      className={classNames(styles.ul, className)}
      {...props}
    >
      {children}
    </Space>
  );
}
