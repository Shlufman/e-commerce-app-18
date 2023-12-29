// Icon.js
import React from 'react';

import styles from './icon.module.css'; // Подключаем модульные стили

const Icon = ({ className }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className={`${styles.icon} ${className}`}>
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
