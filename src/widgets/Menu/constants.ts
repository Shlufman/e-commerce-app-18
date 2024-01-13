import { MenuFactory } from "./utils/MenuFactory";

export const DEFAULT_SECTION = 'all';
export const DEFAULT_COLLECTION = 'all';
export const DEFAULT_APPAREL = 'all';
export const DEFAULT_LOGO_MENU_ITEM = {
    id: 'id_menu',
    name: 'LOGO',
    prefixPath: '',
    path: '/',
    subMenu: null,
  };

export const DEFAULT_MENU = new MenuFactory(DEFAULT_LOGO_MENU_ITEM).getMenuItem();
