import React, { FocusEventHandler, MouseEventHandler, useState } from 'react';

import { Link } from 'react-router-dom';

import TCMenuItem from '../../model/TMenuItem';

import styles from './RFCMainRowMenuItem.module.scss';

import { TFHandleOnHoverAddMenu, TFHandleOnClickCleanMenu, TFHandleOnClickMenu } from '../../types/types-callback';

type TPropsMenuItem = {
    paths: Array<string>;
    className: string;
    item: TCMenuItem;
    handleOnHoverMenuItem: TFHandleOnHoverAddMenu;
    handleOnClickMenuItem: TFHandleOnClickMenu;
}

const RFCMainRowMenuItem: React.FC<TPropsMenuItem> = ({ item,
    handleOnHoverMenuItem, handleOnClickMenuItem, paths }) => {

    const [isActive, setIsActive] = useState<boolean>(false);
    const handleOnFocus: MouseEventHandler<HTMLDivElement> = () => {
        // handleOnHoverMenuItem(item, level);
    }

    const handleOnHover = (e: React.MouseEvent<HTMLDivElement>) => {
        handleOnHoverMenuItem(item);
    }

    const handleOnHoverMenuItemL = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
        setIsActive(true);
        handleOnHoverMenuItem(item);
    }

    const handleOnBlurMenuItemL: FocusEventHandler<HTMLAnchorElement> = (e) => {
        setIsActive(true);
        handleOnHoverMenuItem(item);
    }

    const handleOnClickLink = () => {
        console.log('name: ', item.name, 'path:', item.path);
        handleOnClickMenuItem(item);
    }
    return (
        item.subMenu ? <li><div
            className={`${styles.menuItemLink} ${item.isActive ? styles.active : ''} ${item.level <= 0 ? styles.mainMenu : ''}`}
            onMouseOver={handleOnHoverMenuItemL}
            onClick={handleOnClickLink}>{item.name}
        </div></li> :
            <li>
                <div
                    className={`${styles.menuItemLink} ${item.isActive ? styles.active : ''} ${item.level === 0 ? styles.mainMenu : ''}`}
                    onClick={handleOnClickLink}
                    onMouseOver={handleOnHoverMenuItemL}>{item.name}
                </div>
            </li>

    );

};

//`/${item.prefixPath}/${item.paths.join('/')}`
export default RFCMainRowMenuItem;