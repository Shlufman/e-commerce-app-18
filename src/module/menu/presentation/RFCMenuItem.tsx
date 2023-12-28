import React, {FocusEventHandler, MouseEventHandler, useState} from 'react';

import {Link} from 'react-router-dom';

import {TypeMenuItemDTO} from '../../../general/constants/constants';

import {TFHandleOnHoverAddMenu,TFHandleOnClickCleanMenu} from './MenuContainer';

import style from './../style/MenuContainer.module.scss'


type TPropsMenuItem = {
    paths: Array<string>;
    item: TypeMenuItemDTO;
    handleOnHoverMenuItem: TFHandleOnHoverAddMenu;
    handleOnClickMenuItem:TFHandleOnClickCleanMenu;
}

const MenuItem: React.FC<TPropsMenuItem> = ({item, handleOnHoverMenuItem,handleOnClickMenuItem , paths}) => {

    const [isActive, setIsActive] = useState<boolean>(false);
    const handleOnFocus: MouseEventHandler<HTMLDivElement> = () => {
        // handleOnHoverMenuItem(item, level);
    }

    const handleOnHover = (e: React.MouseEvent<HTMLDivElement>) => {
        handleOnHoverMenuItem(item);
    }

    const handleOnHoverMenuItemL = (e: React.MouseEvent<HTMLAnchorElement|HTMLDivElement>) => {
        setIsActive(true);
            handleOnHoverMenuItem(item);
    }

    const handleOnBlurMenuItemL :FocusEventHandler<HTMLDivElement>= (e) => {
        setIsActive(true);
        handleOnHoverMenuItem(item);
    }
    // console.log('item [name:', item.name, ', level:', level);

    // <div className={style.menuItem} onMouseOver={handleOnHover}>{item.name}</div>

    console.log('item.isActive',item.isActive)
    return (
        item.subMenu ? <div className={`${style.menuItem} ${item.isActive?style.active:''} ${item.level===0?style.mainMenu:''}`} onBlur={handleOnBlurMenuItemL}  onMouseOver={handleOnHoverMenuItemL}>{item.name}</div> :
            <Link to={`/${item.prefixPath}/${paths.join('/')}`} className={`${style.menuItemLink} ${item.isActive?style.active:''} ${item.level===0?style.mainMenu:''}`}
                  onClick={handleOnClickMenuItem}
                  onMouseOver={handleOnHoverMenuItemL}>{item.name}</Link>
    )
        ;
};

export default MenuItem;