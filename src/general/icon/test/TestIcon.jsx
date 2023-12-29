import React from 'react';

import Icon from './Icon'; // Ваш компонент иконки

import styles from './icon.module.css';

const TestIcon = ({className}) => {
  return (

      <div className={className}>
        <Icon className={styles.iconStroke} />
      </div>
  );
};

export default TestIcon;
