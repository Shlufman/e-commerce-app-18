import D_PATHS from './constants';

const IconWrapper = ({ children,className }) => (
  <svg className={className} viewBox="0 0 24 24">
    {children}
  </svg>
);

export const TemplateIcon = ({className,name}) => (
  <IconWrapper className={className}>
    <path
      d = {D_PATHS[name]}
      fill="inherit"
      stroke="inherit"
    />
  </IconWrapper>
);


const Icon=({name, className})=>{
    console.log("name",name);
    console.log("D_PATH",D_PATHS[name] );
    return <TemplateIcon className={className} name={name}/>;

};

export default Icon;