import React from 'react';
import Carousel from './Carousel';
import { CarouselOuterWrapper as OuterWrapper, CarouselInnerWrapper as InnerWrapper } from '../../../StyledComponents/Carousel';
import { CarouselHeading } from '../../../StyledComponents/Heading';
import { StyledLink } from '../../../StyledComponents/Link';

/**
 * props: categoryName, productGroup
 */
const ProductRow = ({productGroup, categoryName}) => (
    <OuterWrapper noGutters>
        {categoryName && 
            <CarouselHeading>
                <StyledLink to={`/category/${categoryName}`}>{categoryName}</StyledLink>
            </CarouselHeading>    
        }
        <InnerWrapper sm="10" smScreen>
            <Carousel products={productGroup} />
        </InnerWrapper>
        <InnerWrapper md="11" xl="10" lgScreen>
            <Carousel products={productGroup} lgScreen />
        </InnerWrapper>
    </OuterWrapper>
);

export default ProductRow;
//used in Home and RelatedProducts