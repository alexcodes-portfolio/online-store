import React from 'react';
import CustomCol from '../CustomCol';
import { CarouselSubHeading } from '../../../StyledComponents/SubHeading';
import { StyledImage } from '../../../StyledComponents/Elements';
import { StyledLink } from '../../../StyledComponents/Link';
import { ImgExtensionContext } from '../Context';

/**
 * props: product
 * context: imgExtension
*/
const ProductSummary = ({product}) =>  (
    <CustomCol xxs="9" ms="10" md="3" _3xl="2">
        <StyledLink to={`/product/${product.id}`}>
            <ImgExtensionContext.Consumer>
                { imgExtension => ( 
                    <StyledImage src={require(`../../../img/${product.imgUrl}.${imgExtension}`)} withMargin />
                )}
            </ImgExtensionContext.Consumer>
            <CarouselSubHeading>{product.name}</CarouselSubHeading>
        </StyledLink>
    </CustomCol>
);

export default ProductSummary;