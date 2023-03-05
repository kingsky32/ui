import React from 'react';
import classNames from '../../utils/classNames';
import styles from './Checkbox.module.scss';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ label, className, error, ...props }, ref) {
    return (
      <div
        className={classNames(
          styles.container,
          error && styles.error,
          className,
        )}
      >
        <label className={styles.inputContainer}>
          <input
            ref={ref}
            type="checkbox"
            className={styles.input}
            {...props}
          />
          {label && <span className={styles.label}>{label}</span>}
        </label>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    );
  },
);

export default Checkbox;
