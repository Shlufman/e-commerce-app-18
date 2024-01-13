import {TypeMenuItemDTO, TMenuArrayDTO} from '../api/types';

export default class MenuArrayCreate {
    private menuItems: TypeMenuItemDTO;
    private menuArray: Array<TMenuArrayDTO>;
    private readonly DEFAULT_LEVEL: number = -1;

    constructor(menuItems: TypeMenuItemDTO) {
        let clone = JSON.parse(JSON.stringify(menuItems));
        this.menuItems = clone;
        this.menuArray = [];
        this.addRow(this.menuItems, null,this.menuArray);
    }

    addRowReverse(parentMenuItems: TypeMenuItemDTO, menuItems: TypeMenuItemDTO, menuArray: Array<TypeMenuItemDTO>) {
        if (menuItems.subMenu === null) {
            let item: TMenuArrayDTO = {
                id: menuItems.id,
                name: menuItems.name,
                prefixPath: menuItems.prefixPath,
                path: menuItems.path,
                idParent: parentMenuItems.id,
            }

        } else {
            while (menuItems.subMenu.length>0){
                let el= menuItems.subMenu.pop();
                this.addRowReverse(menuItems, el!,menuArray);
            }
        }
    }

    addRow(menuItems: TypeMenuItemDTO, idParent: string|null,menuArray: Array<TMenuArrayDTO>){
        let el :TMenuArrayDTO ={
            idParent: idParent,
            id: menuItems.id,
            name: menuItems.name,
            path: menuItems.path,
            prefixPath: menuItems.prefixPath,
        };

        menuArray.push(el);

        if(menuItems.subMenu!==null) {
            while (menuItems.subMenu.length>0){
                let elem=menuItems.subMenu.pop();
                this.addRow(elem!, menuItems.id,menuArray);
            }
        }
    }

    getArray(){
        return this.menuArray;
    }
}