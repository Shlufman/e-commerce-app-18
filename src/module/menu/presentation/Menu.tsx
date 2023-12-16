import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import style from '../../header/style/Header.module.scss';


import MenuItem from './MenuItem';
import MenuContainer from './MenuContainer';



type TPropsMenu={
    // subMenu:Array<TypeMenuItem>|null;
}



const Menu : React.FC<TPropsMenu>= ({}) => {



    return (
        <div>
            {/*<div className={style.menu}>*/}
            {/*    {subMenu?.map(item =>*/}
            {/*        <MenuItem key={item.id} item={item} handleOnClickMenuItem={handleOnClickMenuItem}/>)}*/}
            {/*</div>*/}
            {/*<MenuContainer subMenu={subMenu}/>*/}
        </div>
    );
};

export default Menu;