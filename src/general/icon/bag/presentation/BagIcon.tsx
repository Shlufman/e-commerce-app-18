import {FC} from "react";

import Icon from '../../general/Icon';

import {BAD_D_PATH} from '../../general/constants';

interface Props{
  className:string;
}

const BagIcon:FC<Props> = ({className}) => {
  return (
      <div className={className}>
        <Icon className={className} dPath={BAD_D_PATH}/>
      </div>
  );
};


export default BagIcon;