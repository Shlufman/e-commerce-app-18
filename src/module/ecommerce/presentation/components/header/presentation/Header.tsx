import style from "../style/Header.module.scss";


import Search from "../../../../../../general/component/search/Search";
import MenuContainer from "../../menu/presentation/MenuContainer";
import ArrowIcon from "../../../../../../general/icon/arrow/presentation/ArrowIcon";
import BagIcon from "../../../../../../general/icon/bag/presentation/BagIcon";
import UserIcon from "../../../../../../general/icon/user/presentation/UserIcon";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.menu}>
        {/*{sections.map(section =>*/}
        {/*    <Link key={section.id} to={section.url}>{section.name} </Link>)}*/}
        <MenuContainer />
      </div>
      <div className={style.customerMenu}>
        <ArrowIcon /> 

        <Search />
        <BagIcon className={style.customIcon}/>
        <UserIcon className={style.customIcon}/>
      </div>
    </div>
  );
};

export default Header;
