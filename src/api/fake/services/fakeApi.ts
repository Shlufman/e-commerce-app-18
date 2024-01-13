import {bannerItems , menuItems} from '../types/fake';

import type {TBannerDTO,TypeMenuItemDTO} from "../../../domain/type/typeDto";


export const getBannerDataFake = async ():Promise<Array<TBannerDTO>> =>{    
    
    return  await Promise.resolve(bannerItems);
};

export const getMenuJSONFake = async ():Promise<TypeMenuItemDTO> =>{    
    
    return  await Promise.resolve(menuItems);
};