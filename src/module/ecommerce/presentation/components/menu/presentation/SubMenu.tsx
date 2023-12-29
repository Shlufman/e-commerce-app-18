import React from 'react';

import {TypeMenuItemDTO} from '../../../../../../general/constants/constants';

import ArrowIcon from '../../../../../../general/icon/arrow/presentation/ArrowIcon';


import TCMenuItem from '../domain/model/TCMenuItem';

import {TFHandleOnClickCleanMenu, TFHandleOnHoverAddMenu} from './MenuContainer';
import RFCMenuItem from './RFCMenuItem';

import style from './../style/MenuContainer.module.scss';





type TPropsSubMenu={
    paths: Array<string>;
    subMenuItem:TCMenuItem;
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
                <ArrowIcon className=''/>
            </div>

            <div>
                {subMenuItem?.subMenu?.map(item=>
                    <RFCMenuItem
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