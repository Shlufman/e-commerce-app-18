import React from 'react';

import styles from './style.module.css';

const Icon = ({ className, animate }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={`${styles.icon} ${className} ${animate ? styles.blinking : ''}`}
    >
      <path
        className={styles.icon}
        d="M12 2L1 21h22L12 2zm0 15l4.5-6H7z"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
};

export default Icon;