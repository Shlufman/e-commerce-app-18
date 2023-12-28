import { Outlet } from "react-router-dom";

import Header from "../../header/presentation/Header";

const Layout: React.FC=()=>{

    return (
        <div>
            <header className="App-header">
                <Header/>
            </header>
            <Outlet />
        </div>
    )
}


export default Layout;