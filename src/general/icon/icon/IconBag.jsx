import { ReactComponent as IconBag } from "./icon-bag.svg";

import styles from "./style.module.scss";

function Icon({className}) {
  return (
    <div className={className}>
      <IconBag className={className}/>
    </div>
  );
}

export default Icon;
