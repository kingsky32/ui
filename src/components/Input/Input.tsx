import React from 'react';
import classNames from '../../utils/classNames';
import styles from './Input.module.scss';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, label, error, ...props },
  ref,
) {
  return (
    <div
      className={classNames(styles.container, error && styles.error, className)}
    >
      <label className={styles.inputContainer}>
        {label && <span className={styles.label}>{label}</span>}
        <input ref={ref} className={styles.input} {...props} />
      </label>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
});

export default Input;
