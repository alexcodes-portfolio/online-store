import React from 'react';
import { RelatedProductsWrapper } from '../../StyledComponents/Product';
import { Heading } from '../../StyledComponents/Heading'
import ProductRow from '../Core/Carousel/ProductRow';

/**
 * props: products
 */
const RelatedProducts = ({products}) => (
    <RelatedProductsWrapper>
        <Heading>Related products</Heading>
        <ProductRow productGroup={products} />
    </RelatedProductsWrapper>
);            

export default RelatedProducts;