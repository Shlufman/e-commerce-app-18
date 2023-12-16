import React from 'react';

import style from './BagSpan.module.scss';

const BagSpan = () => {
    return (
        <span className={`${style.icon} ${style.iconBike}`}></span>
    );
};

export default BagSpan;