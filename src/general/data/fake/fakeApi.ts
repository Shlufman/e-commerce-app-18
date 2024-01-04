import {bannerItems } from './fake';

import type {TBannerDTO} from './../type/type-dto';


export const getBannerDataFake = async ():Promise<Array<TBannerDTO>> =>{    
    
    return  await Promise.resolve(bannerItems);
};
