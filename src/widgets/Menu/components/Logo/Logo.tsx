import { Link } from "react-router-dom";
import TCMenuItem from "../../model/TMenuItem";
import type { TFHandleOnClickCleanMenu } from '../../types/types-callback'


interface Props {
    item: TCMenuItem;
    className?: string;
    handleOnClick: TFHandleOnClickCleanMenu;
}

export const Logo = ({ item, className, handleOnClick }: Props) => {
    return (
        <Link
            to={`${item.prefixPath}${item.path}`}
            className={`${className}`}
            // onBlur={handleOnBlurMenuItemL}  
            // onMouseOver={handleOnHoverMenuItemL} 
            onClick={handleOnClick}>
            {item.name}
        </Link>
    )
}
