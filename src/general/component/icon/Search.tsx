import React from 'react';

import {TPropsSVGSimple} from '../../type/TypePropsSVGComponent';

const Search :React.FC<TPropsSVGSimple>= ({fill ='white',fillOpacity=1.0}) => {
    return (
        <div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2825 15.2175L13.5 12.4575C14.5801 11.1108 15.1032 9.40147 14.9617 7.68097C14.8201 5.96047 14.0248 4.35958 12.7392 3.20748C11.4536 2.05537 9.7754 1.43963 8.04974 1.48685C6.32408 1.53407 4.68209 2.24066 3.46141 3.46135C2.24072 4.68203 1.53412 6.32402 1.4869 8.04968C1.43968 9.77535 2.05543 11.4535 3.20753 12.7391C4.35964 14.0247 5.96053 14.8201 7.68102 14.9616C9.40152 15.1031 11.1109 14.5801 12.4575 13.5L15.2175 16.26C15.2873 16.3303 15.3702 16.3861 15.4616 16.4242C15.553 16.4622 15.651 16.4818 15.75 16.4818C15.8491 16.4818 15.9471 16.4622 16.0385 16.4242C16.1299 16.3861 16.2128 16.3303 16.2825 16.26C16.4177 16.1201 16.4933 15.9332 16.4933 15.7387C16.4933 15.5442 16.4177 15.3573 16.2825 15.2175ZM8.25005 13.5C7.2117 13.5 6.19666 13.1921 5.33331 12.6152C4.46995 12.0383 3.79704 11.2184 3.39968 10.2591C3.00232 9.29977 2.89835 8.24417 3.10093 7.22577C3.3035 6.20737 3.80351 5.27191 4.53774 4.53768C5.27197 3.80346 6.20743 3.30344 7.22583 3.10087C8.24423 2.8983 9.29983 3.00227 10.2591 3.39963C11.2184 3.79699 12.0384 4.46989 12.6153 5.33325C13.1921 6.19661 13.5 7.21164 13.5 8.24999C13.5 9.64238 12.9469 10.9777 11.9624 11.9623C10.9778 12.9469 9.64244 13.5 8.25005 13.5Z"
                      fill={fill} fill-opacity={fillOpacity}/>
            </svg>
        </div>
    );
};

export default Search;