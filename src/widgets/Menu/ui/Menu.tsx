import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

import {
  // menuItems,
  // tempMenuItems,
  TypeMenuItemDTO,
} from "../../../api";

import {
  DEFAULT_SECTION,
  DEFAULT_COLLECTION,
  DEFAULT_APPAREL,
} from "../constants";

import TCMenuItem from "../model/TMenuItem";

import { MenuFactory } from "../utils/MenuFactory";

import SubMenu from "./SubMenu";
import RFCMenuItem from "../components/MenuItem/RFCMenuItem";
import RFCMainRowMenuItem from "../components/MainRowMenuItem/RFCMainRowMenuItem";

import styles from "../style/Menu.module.scss";
import { API } from "../api";

import type { TFHandleOnHoverAddMenu, TFHandleOnClickCleanMenu, TFHandleOnClickMenu } from '../types/types-callback';
import { MenuDropDownBox } from "./MenuDropDownBox";
import { Logo } from "../components/Logo/Logo";
import { DEFAULT_MENU } from '../constants';


export const MenuContainer: React.FC = () => {

  const [subMenuItems, setSubMenuItems] = useState<Array<TCMenuItem>>([DEFAULT_MENU]);

  // const [section, setSection] = useState<string>(DEFAULT_SECTION);
  // const [collection, setCollection] = useState<string>(DEFAULT_COLLECTION);
  // const [apparel, setApparel] = useState<string>(DEFAULT_APPAREL);

  // const [paths, setPaths] = useState<Array<string>>([]);

  useEffect(() => {
    API.getMenuJSONData().then(data => {
      setSubMenuItems(() => {
        return [new MenuFactory(data).getMenuItem()];
      });
    })
  }, []);

  const handleOnHoverAddMenu: TFHandleOnHoverAddMenu = (item: TCMenuItem) => {
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

  const handleOnClickMenu: TFHandleOnClickMenu = (item: TCMenuItem) => {
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

  const mainRowMenu = subMenuItems[0]?.subMenu?.map((item) => 
            <RFCMainRowMenuItem className={""}
              key={item.id}
              item={item}
              paths={[item.path]}
              handleOnHoverMenuItem={() => { }}
              handleOnClickMenuItem={handleOnClickMenu}/>);

  return (
    <header className={styles.header}>
      <nav className={`${styles.header__nav}`} >
        <Logo className={`${styles.logo}`} item={subMenuItems[0]} handleOnClick={handleOnClickCleanMenu} />
        <ul className={styles.header__list}>
          {mainRowMenu}
        </ul>
      </nav>

      <div className={styles.menuBox}>
        {/* {getLogo(subMenuItems)} */}
        {/* {subMenuItems[0]?.subMenu?.map(getRow)} */}
      </div>
      <MenuDropDownBox subMenuItems={subMenuItems} handleOnHoverAddMenu={handleOnHoverAddMenu}
        handleOnClickCleanMenu={handleOnClickCleanMenu} />
      <div className={styles.ghostBackDrop + (subMenuItems.length === 1 ? styles.ghostBackDropHidden : "")}
        onClick={handleOnClickGHostBackDrop}>
      </div>
    </header>
  );
};
