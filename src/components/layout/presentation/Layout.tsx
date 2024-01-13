import { Outlet } from "react-router-dom";

// import Header from "../../header/presentation/Header";
import {MenuContainer} from '../../../widgets/Menu';
import ArrowRight from "shared/ui/ui/ArrowRight";

// import styles from './../style/Layout.module.scss';

export const Layout: React.FC=()=>{

    //className={styles.header__app}
    return (
        <div>
            <MenuContainer />
            {/* <header className="App-header">
                <Header/>
            </header> */}
            <Outlet />
        </div>
    )
}