import React from 'react';
import classNames from '../../utils/classNames';
import styles from './Radio.module.scss';

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, className, error, ...props },
  ref,
) {
  return (
    <div
      className={classNames(styles.container, error && styles.error, className)}
    >
      <label className={styles.inputContainer}>
        <input ref={ref} type="radio" className={styles.input} {...props} />
        {label && <span className={styles.label}>{label}</span>}
      </label>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
});

export default Radio;
