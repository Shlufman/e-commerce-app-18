import React from 'react';

import {TypeMenuItem} from '../../../general/constants/constants';

import ArrowSpan from '../../../general/icon/ArrowSpan';




import {TFHandleOnClickCleanMenu, TFHandleOnHoverAddMenu} from './MenuContainer';
import MenuItem from './MenuItem';

import style from './../style/MenuContainer.module.scss';



type TPropsSubMenu={
    paths: Array<string>;
    subMenuItem:TypeMenuItem;
    level:number;
    handleOnHoverAddMenu :TFHandleOnHoverAddMenu;
    handleOnClickCleanMenu:TFHandleOnClickCleanMenu;
}
const SubMenu: React.FC<TPropsSubMenu> = ({subMenuItem,handleOnHoverAddMenu,handleOnClickCleanMenu,paths}) => {
    // console.log('subMenuItem', subMenuItem.name, 'level',level);
    return (
        <div className={style.subMenuItem}>
            <div className={style.subMenuTitle}>
                <div>
                    {subMenuItem?.name}
                </div>
                <ArrowSpan/>
            </div>

            <div>
                {subMenuItem?.subMenu?.map(item=>
                    <MenuItem
                        key={item.id}
                        item={item}
                        paths={[...paths,item.path]}
                        handleOnHoverMenuItem={handleOnHoverAddMenu}
                        handleOnClickMenuItem={handleOnClickCleanMenu}/> )}
            </div>
        </div>
    );
};

export default SubMenu;