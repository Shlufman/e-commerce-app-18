import Icon from '../../../shared/ui/icon/ui/Icon';

import {ARROW_RIGHT_D_PATH} from '@constants/constants-paths';

// interface Props{
//   className:string;
//   dPath: string;
// }

//:FC<Props>

const ArrowRight = ({className}) => {
  return (
      <div className={className}>
        <Icon className={className} dPath={ARROW_RIGHT_D_PATH}/>
      </div>
  );
};

export default ArrowRight;