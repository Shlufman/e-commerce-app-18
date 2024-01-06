import {getBannerDataFake,getMenuJSONFake} from './fake/services/fakeApi';


import type {TBannerDTO,TypeMenuItemDTO} from '../../domain/type/typeDto';




// const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';


export const getBannerData = async (): Promise<Array<TBannerDTO>> => {
    // const requestOptions: RequestInit = {
    //     method: 'GET',
    //     redirect: 'follow',
    // };
    // const response = await fetch(BASE_URL+"/random.php", requestOptions);
    // return await response.text();
    return await getBannerDataFake();
};


export const getMenuJSONData = async (): Promise<TypeMenuItemDTO> => {
    // const requestOptions: RequestInit = {
    //     method: 'GET',
    //     redirect: 'follow',
    // };
    // const response = await fetch(BASE_URL+"/random.php", requestOptions);
    // return await response.text();
    return await getMenuJSONFake();
};
