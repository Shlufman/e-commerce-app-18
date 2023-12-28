import {TypeMenuItemDTO} from '../constants/constants';
import TCMenuSubItem from '../../module/menu/domain/model/TCMenuSubItem';

export class Factory {
    private readonly menuItemsDTO: TypeMenuItemDTO;
    private readonly menuItem: TCMenuSubItem;
    private readonly DEFAULT_LEVEL: number = -1;
    private readonly DEFAULT_IS_ACTIVE: boolean = false;
    private readonly DEFAULT_ROOT_PATH_URL: string = '';

    constructor(menuItemsDTO: TypeMenuItemDTO) {
        this.menuItemsDTO = menuItemsDTO;
        this.menuItem = this.createMenuItem(this.menuItemsDTO);
    }

    createMenuItem(menuItemsDTO: TypeMenuItemDTO, path = this.DEFAULT_ROOT_PATH_URL, level = this.DEFAULT_LEVEL): TCMenuSubItem {
        let menu: TCMenuSubItem;
        if(level>0){
            path = path + '/'+menuItemsDTO.path;
        }

        menu = new TCMenuSubItem(
            menuItemsDTO.id,
            this.DEFAULT_IS_ACTIVE,
            level,
            menuItemsDTO.name,
            path,
            menuItemsDTO.prefixPath,
            menuItemsDTO.subMenu && menuItemsDTO.subMenu.map(el => this.createMenuItem(el, path, level + 1)),
        )
        return menu;
    }

    getMenuItem() {
        return this.menuItem;
    }
}