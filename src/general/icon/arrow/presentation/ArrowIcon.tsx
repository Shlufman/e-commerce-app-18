import {FC} from "react";

import defaultStyle from "../../default/Icon.module.scss";

import {ReactComponent as Icon} from './../image/arrow.svg';

interface Props {
    className?: string;
  }
  
const ArrowIcon: FC<Props> = ({className})=> {

    return   <Icon className={className?className:defaultStyle.svg}/>;
};

export default ArrowIcon;