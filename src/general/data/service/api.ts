import {getBannerDataFake} from '../fake/fakeApi';


import type {TBannerDTO} from './../type/type-dto';




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

