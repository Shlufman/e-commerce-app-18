export default class TMenuItem {
     id: string;
     isActive: boolean;
     level: number;
     name: string;
     path: string;
     prefixPath: string;
     subMenu: Array<TMenuItem>|null;

    constructor(id: string, isActive:boolean, level:number, name:string, path:string, prefixPath:string, subMenu:Array<TMenuItem>|null) {
        this.id = id;
        this.isActive = isActive;
        this.level = level;
        this.name = name;
        this.path = path;
        this.prefixPath = prefixPath;
        this.subMenu = subMenu;
    }
}