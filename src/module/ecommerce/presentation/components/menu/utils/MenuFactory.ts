import {TypeMenuItemDTO} from '../../../../../../general/constants/constants';
import TCMenuItem from '../domain/model/TCMenuItem';

export class MenuFactory {
    private readonly menuItemsDTO: TypeMenuItemDTO;
    private readonly menuItem: TCMenuItem;
    private readonly DEFAULT_LEVEL: number = -1;
    private readonly DEFAULT_IS_ACTIVE: boolean = false;
    private readonly DEFAULT_ROOT_PATH_URL: string = '';

    constructor(menuItemsDTO: TypeMenuItemDTO) {
        this.menuItemsDTO = menuItemsDTO;
        this.menuItem = this.createMenuItem(this.menuItemsDTO);
    }

    createMenuItem(menuItemsDTO: TypeMenuItemDTO, path = this.DEFAULT_ROOT_PATH_URL, level = this.DEFAULT_LEVEL): TCMenuItem {
        let menu: TCMenuItem;
        // if(level>0){
            // path = path + '/'+menuItemsDTO.path;
            path = menuItemsDTO.path;
        // }

        menu = new TCMenuItem(
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