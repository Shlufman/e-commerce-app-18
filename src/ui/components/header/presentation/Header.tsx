import style from "../style/Header.module.scss";

import Search from "../../search/Search";
import MenuContainer from "../../menu/presentation/MenuContainer";


const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.menu}>
        <MenuContainer />
      </div>
     

      <div className={style.customerMenu}>
        <Search />
        {/* <BagIcon className={style.customIcon}/>
        <UserIcon className={style.customIcon}/> */}
      </div>
    </div>
  );
};

export default Header;
