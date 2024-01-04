import React from 'react';

import style from './Search.module.scss';

const Search = () => {
    return (
            <input className={style.searchIconDarkTheme} type="search" placeholder="Search..."/>
    );
};

export default Search;