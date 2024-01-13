import style from "../style/Menu.module.scss";
import SubMenu from "./SubMenu";

import TCMenuItem from "../model/TMenuItem";

import type { TFHandleOnHoverAddMenu, TFHandleOnClickCleanMenu } from '../types/types-callback';


interface Props {
    subMenuItems: Array<TCMenuItem>;
    handleOnHoverAddMenu: TFHandleOnHoverAddMenu;
    handleOnClickCleanMenu: TFHandleOnClickCleanMenu;
}


export const MenuDropDownBox = ({ subMenuItems, handleOnHoverAddMenu, handleOnClickCleanMenu }: Props) => {
    return (
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
    )
}
