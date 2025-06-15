import React from 'react';
import styles from './Loader2.module.scss';

interface Loader2Props {
  size?: number;
  className?: string;
}

const Loader2: React.FC<Loader2Props> = ({ size = 20, className = '' }) => {
  return (
    <svg
      className={`${styles.spinner} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className={styles.spinnerCircle}
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="60"
        strokeDashoffset="20"
      />
    </svg>
  );
};

export default Loader2;
