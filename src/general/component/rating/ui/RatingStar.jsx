import D_PATHS from "../../../../general/component/icon/constants/constants";

export const RatingStar = ({fraction}) => {
    if(fraction>1){
        fraction=1;
    }
    return (
        <div>
            <svg width="24" height="24" viewBox="0 0 24 24">
                <g id="layer1">
                    <mask
                        id="mask0_13725_1339"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                    >
                        <path d={D_PATHS["star"]} fill="#C4C4C4" />
                    </mask>
                    <g mask="url(#mask0_13725_1339)">
                        <path
                            d={`M 0, 0 H ${2.2 + fraction * 19.8} V 24 H 0 Z`}
                            fill="#568fff"
                            fill-opacity="1"
                            style={{ strokeWidth: 0.968283 }}
                        />
                        <path
                            d={`M ${2.2 + fraction * 19.8},0 H 24 V 24 H ${2.2 + fraction * 19.8} Z`}
                            fill="#000000"
                            fill-opacity="0.1"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};