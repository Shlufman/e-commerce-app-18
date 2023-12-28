import {TypeMenuItemDTO} from '../../../../general/constants/constants';

export default class TCMenuSubItem {
     id: string;
     isActive: boolean;
     level: number;
     name: string;
     path: string;
     prefixPath: string;
     subMenu: Array<TCMenuSubItem>|null;

    constructor(id: string, isActive:boolean, level:number, name:string, path:string, prefixPath:string, subMenu:Array<TCMenuSubItem>|null) {
        this.id = id;
        this.isActive = isActive;
        this.level = level;
        this.name = name;
        this.path = path;
        this.prefixPath = prefixPath;
        this.subMenu = subMenu;
    }
}