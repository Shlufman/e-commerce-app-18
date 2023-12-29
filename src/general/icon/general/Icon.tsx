// Icon.js
import React from 'react';

import styles from './defaultIcon.module.scss';

interface Props{
  className?:string;
    dPath:string;
}

const Icon:React.FC<Props> = ({className,dPath}) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className={`${styles.icon} ${className}`}> 
      <path
        className={styles.icon}
        d={dPath}
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
};

export default Icon;