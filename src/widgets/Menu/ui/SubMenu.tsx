import TCMenuItem from '../model/TMenuItem';

import { TFHandleOnClickCleanMenu, TFHandleOnHoverAddMenu } from '../types/types-callback';
import RFCMenuItem from '../components/MenuItem/RFCMenuItem';

import styles from '../style/Menu.module.scss';

import { ARROW_RIGHT_D_PATH } from '@constants/constants-paths';
import Icon from '../../../shared/ui/icon/ui/Icon';

import { ReactComponent as ReactLogo } from '../../../assets/icon_24_24.svg';


interface Props {
    paths: Array<string>;
    subMenuItem: TCMenuItem;
    level: number;
    handleOnHoverAddMenu: TFHandleOnHoverAddMenu;
    handleOnClickCleanMenu: TFHandleOnClickCleanMenu;
}

const SubMenu: React.FC<Props> = ({ subMenuItem, handleOnHoverAddMenu, handleOnClickCleanMenu, paths }) => {
    // console.log('subMenuItem', subMenuItem.name, 'level',level);
    return (
        <div className={styles.subMenuItem}>
            <div className={styles.subMenuTitle}>
                <div>
                    {subMenuItem?.name}
                </div>

                <ReactLogo />
                {/* <Icon className={styles.rightArrow} name={ARROW_RIGHT_D_PATH}/> */}
            </div>

            <div>
                {subMenuItem?.subMenu?.map(item =>
                    <RFCMenuItem
                        className={""}
                        key={item.id}
                        item={item}
                        paths={[...paths, item.path]}
                        handleOnHoverMenuItem={handleOnHoverAddMenu}
                        handleOnClickMenuItem={handleOnClickCleanMenu} />)}
            </div>
        </div>
    );
};

export default SubMenu;