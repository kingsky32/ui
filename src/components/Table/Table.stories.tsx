import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InternalTable from './Table';

export default {
  title: 'Table/Table',
  component: InternalTable,
  args: {
    items: [...new Array(1000)].map((_, index) => ({
      title: `테이블 데이터 ${index + 1}`,
      createdAt: '2023-03-05',
    })),
    columns: [
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
      asynchronous: true,
    },
  },
} as unknown as ComponentMeta<typeof InternalTable>;

export const Table: ComponentStory<typeof InternalTable> = (args) => {
  const [page, setPage] = React.useState<number>(1);
  React.useEffect(() => {
    if (args.pagination) {
      setPage(args.pagination?.page ?? 1);
    }
  }, [args.pagination]);
  return (
    <InternalTable
      {...args}
      columns={[
        {
          title: '번호',
          render: (_value, _item, itemIndex) =>
            (page - 1) * (args.pagination ? args.pagination.limit ?? 10 : 0) +
            itemIndex +
            1,
          align: 'center',
          width: 80,
        },
        ...(args.columns ?? []),
      ]}
      pagination={{ ...(args.pagination ?? {}), page, onPageChange: setPage }}
    />
  );
};
