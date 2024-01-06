import {TypeMenuItemDTO} from '../../../../api';
import TCMenuItem from '../domain/model/TCMenuItem';

import {TMenuArrayDTO} from '../../../../domain/type/typeDto';

// type TMenuArray ={
//     id: string;
//     name: string;
//     prefixPath: string;
//     path: string;
//     idParent: string;
// }

// type TMenuArrayDTO = {
//     [key in Exclude<keyof TypeMenuItemDTO, 'subMenu'>]: string;
// } & {
//     idParent: string;
// }

// type TCMenuItemShort = {
//     id: string;
//     isActive: boolean;
//     level: number;
//     name: string;
//     path: string;
//     prefixPath: string;
// }

export default class MenuObjectCreate {
    private arrayDTO: Array<TMenuArrayDTO>;
    private array: Array<TMenuArrayDTO>;
    private menuObject: TCMenuItem | null;

    private readonly DEFAULT_LEVEL: number = -1;
    private readonly DEFAULT_IS_ACTIVE: boolean = false;
    private readonly DEFAULT_ROOT_PATH_URL: string = '';

    constructor(arrayDTO: Array<TMenuArrayDTO>) {
        this.arrayDTO = arrayDTO;
        this.array = [...arrayDTO];

        let rootItem = this.array.filter(el => el.idParent === null);
        if (rootItem.length === 1) {
            let level = this.DEFAULT_LEVEL;
            const index = this.array.indexOf(rootItem[0]);
            this.array.splice(index, 1);
            let idParent = rootItem[0].idParent;
            console.log('rootItem[0]',rootItem[0]);
            this.menuObject = new TCMenuItem(idParent!, this.DEFAULT_IS_ACTIVE, level, rootItem[0].name, rootItem[0].path, rootItem[0].prefixPath, null);

            this.addLevelToSubMenu(this.menuObject, this.DEFAULT_LEVEL, rootItem[0].id);
        } else {
            this.menuObject = null;
        }
    }

    addLevelToSubMenu(menu: TCMenuItem, level: number, idParent: string) {
        let subArray: Array<TMenuArrayDTO> = this.array.filter(el => el.idParent === idParent);
        if (subArray.length === 0) {
            menu.subMenu = null;
            return;
        }

        menu.subMenu = subArray
            .map(el => {
                let sub = new TCMenuItem(el.id, this.DEFAULT_IS_ACTIVE, level+1, el.name, el.path, el.prefixPath, null);
                this.addLevelToSubMenu(sub, level +1, el.id);
                return sub;
            });

    }

    // findItemsByIdParent(array: Array<TMenuArrayDTO>,idParent: string, level: number) {
    //     let subArray: Array<TMenuArrayDTO> = array.filter(el => el.idParent === idParent);
    //     if (subArray.length === 0) return null;
    //
    //     let subMenu = subArray
    //         .map(el => new TCMenuItem(el.id, this.DEFAULT_IS_ACTIVE, level, el.name, el.path, el.prefixPath, null));
    //     subArray.forEach(el => {
    //         const index = array.indexOf(el);
    //         array.splice(index, 1);
    //     })
    //     return subMenu;
    // }
    //

    getObject(){
        return this.menuObject;
    }
}