import React from 'react';
import classNames from '../../utils/classNames';
import styles from './Select.module.scss';

export interface SelectItem {
  key?: React.Key;
  label?: React.ReactNode;
  value?: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  placeholder?: string;
  items?: SelectItem[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, label, error, placeholder, items, ...props },
  ref,
) {
  return (
    <div
      className={classNames(styles.container, error && styles.error, className)}
    >
      <label className={styles.selectContainer}>
        {label && <span className={styles.label}>{label}</span>}
        <select ref={ref} className={styles.select} required {...props}>
          {placeholder && (
            <option value="" selected>
              {placeholder}
            </option>
          )}
          {items?.map((item, itemIndex) => (
            <option
              key={item.key ?? `Option-${itemIndex}`}
              value={item.value ?? ''}
            >
              {item.label}
            </option>
          ))}
        </select>
      </label>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
});

export default Select;
