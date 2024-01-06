import D_PATHS from "../../../../constants/constants-paths";

import styles from '../style/style.module.scss';

export const RatingStar = ({fraction}) => {
    if(fraction>1){
        fraction=1;
    }
    if(fraction<0){
        fraction=0;
    }

    //<svg width="20" height="24" viewBox="0 0 20 20">
    return (
        <div>
            <svg className={styles.icon}  viewBox="0 0 20 20">
                <g id="layer1">
                    <mask
                        id="mask0_13725_1339"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                    >
                        <path d={D_PATHS["starCenter"]} fill="#C4C4C4" />
                    </mask>
                    <g mask="url(#mask0_13725_1339)">
                        <path
                            d={`M 0, 0 H ${fraction * 20} V 24 H 0 Z`}
                            fill="#568fff"
                            fill-opacity="1"
                            style={{ strokeWidth: 0.968283 }}
                        />
                        <path
                            d={`M ${fraction * 20},0 H 20 V 20 H ${fraction * 20} Z`}
                            fill="#000000"
                            fill-opacity="0.1"
                        />
                    </g>
                </g>
            </svg>
            
        </div>
    );
};