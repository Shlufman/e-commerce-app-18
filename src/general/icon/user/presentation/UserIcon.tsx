import {FC} from "react";

import Icon from '../../general/Icon';

import {USER_D_PATH} from '../../general/constants';

interface Props{
  className:string;
}

const UserIcon:FC<Props> = ({className}) => {
  return (
      <div className={className}>
        <Icon className={className} dPath={USER_D_PATH}/>
      </div>
  );
};
export default UserIcon;
