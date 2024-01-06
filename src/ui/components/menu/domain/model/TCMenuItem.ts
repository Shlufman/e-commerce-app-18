import {TypeMenuItemDTO} from '../../../../../api';

export default class TCMenuItem {
     id: string;
     isActive: boolean;
     level: number;
     name: string;
     path: string;
     prefixPath: string;
     subMenu: Array<TCMenuItem>|null;

    constructor(id: string, isActive:boolean, level:number, name:string, path:string, prefixPath:string, subMenu:Array<TCMenuItem>|null) {
        this.id = id;
        this.isActive = isActive;
        this.level = level;
        this.name = name;
        this.path = path;
        this.prefixPath = prefixPath;
        this.subMenu = subMenu;
    }
}