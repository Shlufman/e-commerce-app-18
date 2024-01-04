import {FC} from "react";

import Icon from '../general/Icon';

import {ARROW_LEFT_D_PATH} from '../general/constants';

interface Props{
  className:string;
}

const ArrowLeft:FC<Props> = ({className}) => {
  return (
      <div className={className}>
        <Icon className={className} dPath={ARROW_LEFT_D_PATH}/>
      </div>
  );
};


export default ArrowLeft;