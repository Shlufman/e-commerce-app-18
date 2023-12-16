import React from 'react';

import style from './ArrowSpan.module.scss';

const ArrowSpan = () => {
    return (
        <div>
            <span className={`${style.icon} ${style.iconBike}`}></span>
        </div>
    );
};

export default ArrowSpan;