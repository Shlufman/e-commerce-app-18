import React, {FocusEventHandler, MouseEventHandler, useState} from 'react';

import {Link} from 'react-router-dom';

import {TypeMenuItemDTO} from '../../../../../../general/constants/constants';

import TCMenuItem from '../domain/model/TCMenuItem';

import style from './../style/MenuContainer.module.scss';

import styles from './'

import {TFHandleOnHoverAddMenu,TFHandleOnClickCleanMenu} from './MenuContainer';


// import styles from "./";







type TPropsMenuItem = {
    paths: Array<string>;
    item: TCMenuItem;
    handleOnHoverMenuItem: TFHandleOnHoverAddMenu;
    handleOnClickMenuItem:TFHandleOnClickCleanMenu;
}

const RFCMenuItem: React.FC<TPropsMenuItem> = ({item, handleOnHoverMenuItem,handleOnClickMenuItem , paths}) => {

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

    const handleOnBlurMenuItemL :FocusEventHandler<HTMLAnchorElement>= (e) => {
        setIsActive(true);
        handleOnHoverMenuItem(item);
    }

    const handleOnClickLink =()=>{
        console.log('name: ', item.name, 'path:', item.path);
        handleOnClickMenuItem();
    }
    return (
        item.subMenu ? <Link  to={`${item.prefixPath}${item.path}`} className={`${style.menuItemLink} ${item.isActive?style.active:''} ${item.level<=0?style.mainMenu:''}`} onBlur={handleOnBlurMenuItemL}  onMouseOver={handleOnHoverMenuItemL} onClick={handleOnClickLink}>{item.name}</Link> :
            <Link to={`${item.prefixPath}${item.path}`} className={`${style.menuItemLink} ${item.isActive?style.active:''} ${item.level===0?style.mainMenu:''}`}
                  onClick={handleOnClickLink}
                  onMouseOver={handleOnHoverMenuItemL}>{item.name}</Link>
    )

};

//`/${item.prefixPath}/${item.paths.join('/')}`
export default RFCMenuItem;