import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InternalTable from './Table';

export default {
  title: 'Table',
  component: InternalTable,
  args: {
    items: [...new Array(1000)].map((_, index) => ({
      title: `테이블 데이터 ${index + 1}`,
      createdAt: '2023-03-05',
    })),
    columns: [
      {
        title: '번호',
        render: (_value, _item, itemIndex) => itemIndex + 1,
        align: 'center',
        width: 80,
      },
      {
        title: '제목',
        dataIndex: 'title',
      },
      {
        title: '날짜',
        dataIndex: 'createdAt',
        align: 'center',
        width: 120,
      },
    ],
    style: { maxWidth: 520 },
    pagination: {
      page: 1,
      limit: 5,
      total: 1000,
    },
  },
} as ComponentMeta<typeof InternalTable>;

export const Table: ComponentStory<typeof InternalTable> = (args) => (
  <InternalTable {...args} />
);
