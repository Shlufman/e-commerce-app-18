import React from 'react';

import {Link} from 'react-router-dom';

import style from '../style/Header.module.scss';

import {sections} from '../../../../../../general/constants/constants';

import Bag from '../../../../../../general/icon/Bag';
import User from '../../../../../../general/icon/User';
import Search from '../../../../../../general/component/search/Search';
import BagSpan from '../../../../../../general/icon/BagSpan';
import UserSpan from '../../../../../../general/icon/UserSpan';
import MenuContainer from '../../menu/presentation/MenuContainer';
import Main from '../../main/Main';


const Header = () => {

    return (
        <div className={style.container}>
            <div className={style.menu}>
                {/*{sections.map(section =>*/}
                {/*    <Link key={section.id} to={section.url}>{section.name} </Link>)}*/}
                <MenuContainer/>

            </div>
            <div className={style.customerMenu}>

                <Search/>
                <BagSpan/>
                {/*<Bag fill="white"/>*/}
                {/* <UserSpan/> */}
                {/* <User fill="white"/> */}
            </div>
        </div>
    );
};

export default Header;