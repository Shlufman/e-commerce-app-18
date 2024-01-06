import {FC} from "react";

import Icon from '../../../components/icon/ui/Icon';

import {ARROW_LEFT_D_PATH} from '@constants/constants-paths';

// interface Props{
//   className:string;
// }


//:FC<Props>
const ArrowLeft = ({className}) => {
  return (
      <div className={className}>
        <Icon className={className} dPath={ARROW_LEFT_D_PATH}/>
      </div>
  );
};


export default ArrowLeft;