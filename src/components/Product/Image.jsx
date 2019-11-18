import React from 'react';
import Icon from '../Core/Icon';
import { ProductImgWrapper as Wrapper, ProductImg, Backdrop, } from '../../StyledComponents/Product';

const Image = ({path, fullSizeImg, toggleFullSize}) => {
    let imgSrc = require(`../../img/${path}`);

    return (
        <Wrapper onClick={toggleFullSize}>

            <ProductImg src={imgSrc} />

            {fullSizeImg && 
                <Backdrop>
                    <Icon name="times" size="3x" position="absolute" top="3%" right="5%" color="#fff" />
                </Backdrop>
            }
            {fullSizeImg && <ProductImg src={imgSrc} fullSize />}
                    
        </Wrapper>
    );
}
export default Image;