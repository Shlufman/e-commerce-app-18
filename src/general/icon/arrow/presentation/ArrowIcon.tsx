import {FC} from "react";

import Icon from '../../general/Icon';

import {ARROW_D_PATH} from '../../general/constants';

interface Props{
  className:string;
}

const ArrowIcon:FC<Props> = ({className}) => {
  return (
      <div className={className}>
        <Icon className={className} dPath={ARROW_D_PATH}/>
      </div>
  );
};

export default ArrowIcon;