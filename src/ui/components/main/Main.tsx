import React from 'react';

import {Route, Routes, useSearchParams} from 'react-router-dom';


import ProductSection from '../menu/presentation/ProductSection';

import style from './Main.module.scss'


type F = (args: any) => void
const Main = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const r = `${searchParams} id ${searchParams.has('id')} value ${searchParams.get('id')}`;
    return (
        <Routes>
            <Route path={`/products`} element={<ProductSection/>}>
                <Route path={':section'} element={<ProductSection/>}>
                    <Route path={':collection'} element={<ProductSection/>}>
                        <Route path={':apparel'} element={<ProductSection/>}/>
                    </Route>
                </Route>
            </Route>
            <Route path={`/d`} element={<div className={style.div2}>{r}</div>}/>
            <Route path={'*'} element={<div className={style.div3}>{r}</div>}/>
        </Routes>
    );
};

export default Main;