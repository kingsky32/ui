import React from 'react';
import classNames from '../../utils/classNames';
import styles from './Table.module.scss';
import iconFirst from '../../assets/icons/icon_first.png';
import iconPrev from '../../assets/icons/icon_prev.png';
import iconNext from '../../assets/icons/icon_next.png';
import iconLast from '../../assets/icons/icon_last.png';

export type TableItem<T = Record<string, any>> = T;

export interface TableColumn<T = Record<string, any>> {
  title?: string;
  dataIndex?: keyof T;
  width?: number;
  align?: React.TableHTMLAttributes<HTMLTableDataCellElement>['align'];
  render?: (
    value: T[keyof T] | undefined,
    item: T,
    itemIndex: number,
    items: T[],
  ) => React.ReactNode;
}

export interface TablePagination {
  page?: number;
  total?: number;
  limit?: number;
  render?: (page: number) => React.ReactNode;
  onPageChange?: (page: number) => void;
  asynchronous?: boolean;
}

export interface TableProps<T = Record<string, any>>
  extends React.HTMLAttributes<HTMLDivElement> {
  items: TableItem<T>[];
  columns: TableColumn<T>[];
  rowKey?: (item: T, itemIndex: number) => React.Key;
  pagination?: TablePagination | false;
}

export default function Table<T = Record<string, any>>({
  items,
  columns,
  rowKey,
  className,
  pagination,
  ...props
}: TableProps<T>) {
  return (
    <div className={classNames(styles.container, className)} {...props}>
      <table className={styles.table}>
        <colgroup>
          {columns.map((column, columnIndex) => {
            return <col key={`Col-${columnIndex}`} width={column.width} />;
          })}
        </colgroup>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            {columns.map((column, columnIndex) => {
              return (
                <th
                  className={styles.th}
                  key={`Column-${columnIndex}`}
                  align={column.align ?? 'left'}
                >
                  {column.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {pagination
            ? [...new Array(pagination.limit ?? 10)].map((_, index) => {
                const itemIndex = pagination.asynchronous
                  ? index
                  : ((pagination.page ?? 1) - 1) * (pagination.limit ?? 10) +
                    index;
                const item = items[itemIndex];
                const key = rowKey ? rowKey(item, index) : itemIndex;
                if (!item) {
                  return null;
                }
                return (
                  <tr key={key} className={styles.tr}>
                    {columns.map((column, columnIndex) => {
                      const value = column.dataIndex && item[column.dataIndex];
                      return (
                        <td
                          key={`${key}-Column-${columnIndex}`}
                          className={styles.td}
                          align={column.align ?? 'left'}
                        >
                          {column.render
                            ? column.render(value, item, index, items)
                            : (value as React.ReactNode)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            : items.map((item, itemIndex) => {
                const key = rowKey ? rowKey(item, itemIndex) : itemIndex;
                return (
                  <tr key={key} className={styles.tr}>
                    {columns.map((column, columnIndex) => {
                      const value = column.dataIndex && item[column.dataIndex];
                      return (
                        <td
                          key={`${key}-Column-${columnIndex}`}
                          className={styles.td}
                          align={column.align ?? 'left'}
                        >
                          {column.render
                            ? column.render(value, item, itemIndex, items)
                            : (value as React.ReactNode)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
        </tbody>
      </table>
      {pagination && (
        <ul className={styles.paginationContainer}>
          {(pagination.page ?? 1) > 1 && (
            <li className={styles.pagination}>
              <button
                className={styles.paginationButton}
                type="button"
                onClick={() => pagination.onPageChange?.(1)}
              >
                <img
                  className={styles.paginationButtonImage}
                  src={iconFirst}
                  alt="first"
                />
              </button>
            </li>
          )}
          {(pagination.page ?? 1) > 1 && (
            <li
              className={styles.pagination}
              onClick={() =>
                pagination.onPageChange?.((pagination.page ?? 1) - 1)
              }
            >
              <button
                className={styles.paginationButton}
                type="button"
                onClick={() =>
                  pagination.onPageChange?.((pagination.page ?? 1) - 1)
                }
              >
                <img
                  className={styles.paginationButtonImage}
                  src={iconPrev}
                  alt="prev"
                />
              </button>
            </li>
          )}
          {[
            ...new Array(
              Math.min(
                5,
                Math.ceil((pagination.total ?? 0) / (pagination.limit ?? 0)),
              ),
            ),
          ].map((_, index) => {
            const page =
              (pagination.page ?? 1) > 3
                ? (pagination.page ?? 1) <
                  Math.ceil(
                    (pagination?.total ?? 0) / (pagination?.limit ?? 10),
                  ) -
                    2
                  ? (pagination.page ?? 1) - 2 + index
                  : Math.ceil(
                      (pagination.total ?? 0) / (pagination.limit ?? 10),
                    ) +
                    index -
                    4
                : index + 1;
            return (
              <li
                key={`Pagination-${index}`}
                className={classNames(
                  styles.pagination,
                  page === pagination.page && styles.active,
                )}
              >
                <button
                  className={styles.paginationButton}
                  type="button"
                  onClick={() => pagination.onPageChange?.(page)}
                >
                  {pagination.render ? pagination.render(page) : page}
                </button>
              </li>
            );
          })}
          {(pagination.page ?? 1) <
            Math.ceil((pagination.total ?? 0) / (pagination.limit ?? 10)) && (
            <li className={styles.pagination}>
              <button
                className={styles.paginationButton}
                type="button"
                onClick={() =>
                  pagination.onPageChange?.((pagination.page ?? 1) + 1)
                }
              >
                <img
                  className={styles.paginationButtonImage}
                  src={iconNext}
                  alt="next"
                />
              </button>
            </li>
          )}
          {(pagination.page ?? 1) <
            Math.ceil((pagination.total ?? 0) / (pagination.limit ?? 10)) && (
            <li className={styles.pagination}>
              <button
                className={styles.paginationButton}
                type="button"
                onClick={() =>
                  pagination.onPageChange?.(
                    Math.ceil(
                      (pagination.total ?? 0) / (pagination.limit ?? 0),
                    ),
                  )
                }
              >
                <img
                  className={styles.paginationButtonImage}
                  src={iconLast}
                  alt="last"
                />
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
