import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

import {
  menuItems,
  tempMenuItems,
  TypeMenuItemDTO,
} from "../../../../../../general/constants/constants";

import {
  DEFAULT_SECTION,
  DEFAULT_COLLECTION,
  DEFAULT_APPAREL,
} from "../../../../../../general/constants/constants";

import TCMenuItem from "../domain/model/TCMenuItem";

import { MenuFactory } from "../utils/MenuFactory";

import MenuObjectCreate from "../utils/MenuObjectCreate";

import MenuArrayCreate from "../utils/MenuArrayCreate";

import SubMenu from "./SubMenu";
import RFCMenuItem from "./RFCMenuItem";

import style from "./../style/MenuContainer.module.scss";

// export type TFHandleOnHoverAddMenu = (subMenuItem: TypeMenuItem, level: number) => void;
export type TFHandleOnHoverAddMenu = (item: TCMenuItem) => void;
export type TFHandleOnClickCleanMenu = () => void;

const MenuContainer: React.FC = () => {
  // const [subMenuItems, setSubMenuItems]
  //     = useState<Array<TypeMenuItemDTO>>([]);
  const [subMenuItems, setSubMenuItems] = useState<Array<TCMenuItem>>([]);

  const [section, setSection] = useState<string>(DEFAULT_SECTION);
  const [collection, setCollection] = useState<string>(DEFAULT_COLLECTION);
  const [apparel, setApparel] = useState<string>(DEFAULT_APPAREL);

  const [paths, setPaths] = useState<Array<string>>([]);

  useEffect(() => {
    // const mapperToArray = new MenuArrayCreate(menuItems);
    // console.log(mapperToArray.getArray());
    // const ar = mapperToArray.getArray();

    // const mapperToObject = new MenuObjectCreate(ar);
    // console.log(mapperToObject.getObject());

    const creater = new MenuFactory(menuItems);
    // let res: TypeMenuItemDTO = {...menuItems};
    let res = creater.getMenuItem();
    // let res= mapperToObject.getObject();
    console.log("res", res);

    setSubMenuItems((prev) => {
      const array = [...prev];
      array.push(res!);
      console.log("array", array);
      return array;
    });
  }, []);

  const handleOnHoverAddMenu: TFHandleOnHoverAddMenu = (item: TCMenuItem) => {
    // console.log('item.name',item.name,'item.level',item.level);
    setSubMenuItems((prev) => {
      let newState = [...prev];
      newState.length = item.level + 1;

      let newSubMenu: Array<TCMenuItem> = newState[item.level].subMenu?.map(
        (el) => {
          let newElem;
          if (el.name === item.name) {
            newElem = { ...el, isActive: true };
          } else {
            newElem = { ...el, isActive: false };
          }
          return newElem as TCMenuItem;
        }) as Array<TCMenuItem>;
      newState[item.level].subMenu = newSubMenu;
      if (item.subMenu !== null) newState.push(item);
      return newState;
    });
  };

  const handleOnClickCleanMenu: TFHandleOnClickCleanMenu = () => {
    setSubMenuItems((prev) => {
      let res = [...prev];
      res.length = 1;
      return res;
    });
  };

  const handleOnClickGHostBackDrop = () => {
    setSubMenuItems((prev) => {
      let res = [...prev];
      res.length = 1;
      return res;
    });
  };

  return (
    <div className={style.container}>
      <div className={style.menuBox}>
        {subMenuItems[0] && (
          <RFCMenuItem
            key={subMenuItems[0].id}
            item={subMenuItems[0]}
            paths={[subMenuItems[0].path]}
            handleOnHoverMenuItem={() => {}}
            handleOnClickMenuItem={() => {}}
          />
        )}
        {subMenuItems[0]?.subMenu?.map((item) => {
          return (
            <>
              <RFCMenuItem
                key={item.id}
                item={item}
                paths={[item.path]}
                handleOnHoverMenuItem={handleOnHoverAddMenu}
                handleOnClickMenuItem={handleOnClickCleanMenu}
              />
            </>
          );
        })}
      </div>
      <div className={style.menuDropDownBox}>
        {subMenuItems.slice(1)?.map((subMenuItem, index) => (
          <SubMenu
            key={index}
            subMenuItem={subMenuItem}
            paths={[subMenuItem.path]}
            level={subMenuItem.level}
            handleOnHoverAddMenu={handleOnHoverAddMenu}
            handleOnClickCleanMenu={handleOnClickCleanMenu}
          />
        ))}
      </div>
      <div
        className={
          style.ghostBackDrop +
          (subMenuItems.length === 1 ? style.ghostBackDropHidden : "")
        }
        onClick={handleOnClickGHostBackDrop}>            
        </div>
    </div>
  );
};

export default MenuContainer;
