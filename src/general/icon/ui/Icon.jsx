import D_PATHS from "../constants/constants";

import styles from '../style/index.scss';

const SvgIcon = ({ children, className }) => (
  <svg className={className} viewBox="0 0 24 24">
    {children}
  </svg>
);

const IconWrapper = ({ children, className }) => (
  <div className={className}>
    {/* <SvgIcon children={children} className={className} /> */}
    <svg className={className} viewBox="0 0 24 24">
      {children}
    </svg>
  </div>
);

export const IconWrapperForBtn = ({ name, className}) => {
  return (
    <button className={`${className} ${styles.styleIconWrapper}`}>
      <svg className={styles.styleIcon} viewBox="0 0 24 24">
      <path d={D_PATHS[name]} fill="inherit" stroke="inherit" />
      </svg>
    </button>
  );
};

export const TemplateIcon = ({ className, name }) => (
  <IconWrapper className={className}>
    <path d={D_PATHS[name]} fill="inherit" stroke="inherit" />
  </IconWrapper>
);

const Icon = ({ name, className }) => {
  return <TemplateIcon className={className} name={name} />;
};

export const IconBtn = ({ name, className }) => {
  return <IconWrapperForBtn className={className} name={name} />;
};

export default Icon;
