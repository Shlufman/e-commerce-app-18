import {FC} from "react";

import Icon from '../general/Icon';

import {ARROW_RIGHT_D_PATH} from '../general/constants';

interface Props{
  className:string;
}

const ArrowRight:FC<Props> = ({className}) => {
  return (
      <div className={className}>
        <Icon className={className} dPath={ARROW_RIGHT_D_PATH}/>
      </div>
  );
};

export default ArrowRight;