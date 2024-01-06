import { Outlet } from "react-router-dom";

// import Header from "../../header/presentation/Header";
import Header from '../../menu3/ui/Header';

import styles from './../style/Layout.module.scss';

export const Layout: React.FC=()=>{

    return (
        <div>
            <Header className={styles.header__app}/>
            {/* <header className="App-header">
                <Header/>
            </header> */}
            <Outlet />
        </div>
    )
}