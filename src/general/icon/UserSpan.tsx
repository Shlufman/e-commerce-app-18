import React from 'react';

import style from './UserSpan.module.scss';

const UserSpan = () => {
    return (
        <span className={`${style.icon} ${style.iconUser}`}></span>
    );
};

export default UserSpan;