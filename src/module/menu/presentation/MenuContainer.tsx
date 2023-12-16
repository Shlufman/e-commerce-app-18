import React, {ChangeEventHandler, MouseEventHandler, useEffect, useState} from 'react';

import {menuItems, TypeMenuItem} from '../../../general/constants/constants';
import {DEFAULT_SECTION, DEFAULT_COLLECTION, DEFAULT_APPAREL} from '../../../general/constants/constants';

import SubMenu from './SubMenu';
import MenuItem from './MenuItem';

import style from './../style/MenuContainer.module.scss'


// export type TSubMenuState = TypeMenuItem & {
//     level: number;
// };

// export type TFHandleOnHoverAddMenu = (subMenuItem: TypeMenuItem, level: number) => void;
export type TFHandleOnHoverAddMenu = (item: TypeMenuItem) => void;
export type TFHandleOnClickCleanMenu = () => void;

const MenuContainer: React.FC = () => {
    const [subMenuItems, setSubMenuItems]
        = useState<Array<TypeMenuItem>>([]);
    const [section, setSection] = useState<string>(DEFAULT_SECTION);
    const [collection, setCollection] = useState<string>(DEFAULT_COLLECTION);
    const [apparel, setApparel] = useState<string>(DEFAULT_APPAREL);

    const [paths, setPaths] = useState<Array<string>>([]);

    useEffect(() => {
        let res: TypeMenuItem = {...menuItems};
        console.log('res', res);

        setSubMenuItems(prev => {
            const array = [...prev];
            array.push(res);
            console.log(array);
            return array;
        });
    }, []);

    const handleOnHoverAddMenu: TFHandleOnHoverAddMenu = (item: TypeMenuItem) => {
        // console.log('item.name',item.name,'item.level',item.level);
        setSubMenuItems(prev => {
            let newState = [...prev];
            newState.length = item.level + 1;

            let newSubMenu: Array<TypeMenuItem> = newState[item.level].subMenu?.map(el => {
                let newElem;
                if (el.name === item.name) {
                    newElem = {...el, isActive: true};
                } else {
                    newElem = {...el, isActive: false};
                }
                return newElem as TypeMenuItem;
            }) as Array<TypeMenuItem>;
            newState[item.level].subMenu = newSubMenu;
            if (item.subMenu !== null)
                newState.push(item);
            return newState;

        })

    }

    const handleOnClickCleanMenu: TFHandleOnClickCleanMenu=()=>{
        setSubMenuItems(prev=>{
            let res = [...prev];
            res.length=1;
            return res;
        })
    }

    return (<div className={style.container}>
            <div className={style.menuBox}>
                {subMenuItems[0] && <MenuItem key={subMenuItems[0].id}
                                              item={subMenuItems[0]}
                                              paths={[subMenuItems[0].path]}
                                              handleOnHoverMenuItem={handleOnHoverAddMenu}
                                              handleOnClickMenuItem={handleOnClickCleanMenu}/>}
                {subMenuItems[0]?.subMenu?.map((item) => {
                    return (<>
                        <MenuItem key={item.id}
                                  item={item}
                                  paths={[item.path]}
                                  handleOnHoverMenuItem={handleOnHoverAddMenu}
                                  handleOnClickMenuItem={handleOnClickCleanMenu}/></>)
                })}
            </div>
            <div className={style.menuDropDownBox}>
                {
                    subMenuItems.slice(1)?.map((subMenuItem, index) =>
                        <SubMenu
                            key={index}
                            subMenuItem={subMenuItem}
                            paths={[subMenuItem.path]}
                            level={subMenuItem.level}
                            handleOnHoverAddMenu={handleOnHoverAddMenu}
                            handleOnClickCleanMenu={handleOnClickCleanMenu}/>)
                }
            </div>
        </div>
    );
};

export default MenuContainer;