import {bannerItems , menuItems} from './data/menu-items-json';

import type {TBannerDTO,TypeMenuItemDTO} from "../../types";


export const getBannerDataFake = async ():Promise<Array<TBannerDTO>> =>{    
    
    return  await Promise.resolve(bannerItems);
};

export const getMenuJSONFake = async ():Promise<TypeMenuItemDTO> =>{    
    
    return  await Promise.resolve(menuItems);
};