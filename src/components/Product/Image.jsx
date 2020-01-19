import React from 'react';
import Icon from '../Core/Icon';
import { ProductImgWrapper as Wrapper, ProductImg, Backdrop, } from '../../StyledComponents/Product';


const Image = ({path, fullSizeImg, toggleFullSize, imgExtension}) => {
    
    let imgSrc = require(`../../img/${fullSizeImg? 'lg_' + path : path}.${imgExtension}`);

    return (
        <Wrapper onClick={toggleFullSize}>

            <ProductImg src={imgSrc} alt="nordic skis" />

            {fullSizeImg && 
                <Backdrop>
                    <Icon name="times" size="3x" position="absolute" top="3%" right="5%" color="#fff" />
                </Backdrop>
            }
            {fullSizeImg && <ProductImg src={imgSrc} alt="nordic skis" fullSize />}
                    
        </Wrapper>
    );
}
export default Image;