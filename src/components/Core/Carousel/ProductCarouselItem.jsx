import React from 'react';
import ProductSummary from './ProductSummary';

/**
 * props: content, lgScreen
 */
const ProductCarouselItem = ({content, lgScreen}) => {        
    return lgScreen?
        content.map(
            item => <ProductSummary product={item} key={item.id} />
        ):(
            <ProductSummary product={content} /> 
        );
};

export default ProductCarouselItem;