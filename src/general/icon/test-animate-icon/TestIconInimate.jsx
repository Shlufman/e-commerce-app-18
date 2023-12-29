
import React from 'react';

import Icon from './Icon';
import styles from './style.module.css';

const TestIconInimate = () => {
  return (
    <div className={styles.container}>
      <Icon />
      <Icon className={styles.iconStroke} animate />
    </div>
  );
};

export default TestIconInimate;