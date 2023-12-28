import React from 'react';
import {useParams} from 'react-router-dom';

const ProductSection = () => {
    const {section} = useParams();
    const {collection} = useParams();
    const {apparel} = useParams();
    let brands;
    return (
        <>
            <div>
                section: {section}.
            </div>
            <div>
                Collection: {collection}.
            </div>
            <div>
                Brands: {brands}.
            </div>
            <div>
                Apparel: {apparel}.
            </div>
        </>
    );
};

export default ProductSection;