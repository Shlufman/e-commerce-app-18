import {FC} from "react";

import defaultStyle from "../../default/Icon.module.scss";

import {ReactComponent as Icon} from './../image/user.svg';

interface Props {
    className?: string;
  }
  
const UserIcon: FC<Props> = ({className})=> {

    return   <Icon className={className?className:defaultStyle.svg}/>;
};

export default UserIcon;