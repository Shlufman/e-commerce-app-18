import React from 'react';

import styles from "../style/ImageComponent.module.scss";

interface ImageProps {
  src: string;
  alt: string;
  opacity: number;
}

const ImageComponent: React.FC<ImageProps> = ({ src, alt ,opacity }) => {
  return (
    <div style={{ maxWidth: '100%', height: 'auto' }}>
      <img className={styles.image} src={src} alt={alt} style={{ maxWidth: '100%', height: 'auto',opacity }} />
    </div>
  );
};

export default ImageComponent;
