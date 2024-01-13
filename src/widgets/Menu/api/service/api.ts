import { getBannerDataFake, getMenuJSONFake } from './fake/fakeApi';

import type { TBannerDTO, TypeMenuItemDTO } from '../types';

import type { IAPIMenu } from '../types';

const REACT_APP_USE_FAKE_API = process.env.REACT_APP_USE_FAKE_API;

// const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';


const API = {} as IAPIMenu;

if (REACT_APP_USE_FAKE_API) {
    API.getBannerData = async (): Promise<Array<TBannerDTO>> => {

        return await getBannerDataFake();
    };

    API.getMenuJSONData = async (): Promise<TypeMenuItemDTO> => {

        return await getMenuJSONFake();
    };
}

if (!REACT_APP_USE_FAKE_API) {
    API.getBannerData = async (): Promise<Array<TBannerDTO>> => {
        // const requestOptions: RequestInit = {
        //     method: 'GET',
        //     redirect: 'follow',
        // };
        // const response = await fetch(BASE_URL+"/random.php", requestOptions);
        // return await response.text();
        return await getBannerDataFake();
    };

    API.getMenuJSONData = async (): Promise<TypeMenuItemDTO> => {
        // const requestOptions: RequestInit = {
        //     method: 'GET',
        //     redirect: 'follow',
        // };
        // const response = await fetch(BASE_URL+"/random.php", requestOptions);
        // return await response.text();
        return await getMenuJSONFake();
    };
}

export {API}

    // const mapperToArray = new MenuArrayCreate(menuItems);
    // console.log(mapperToArray.getArray());
    // const ar = mapperToArray.getArray();

    // const mapperToObject = new MenuObjectCreate(ar);
    // console.log(mapperToObject.getObject());