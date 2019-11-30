import React from 'react';
import CustomCol from '../Core/CustomCol';
import Icon from '../Core/Icon';
import { CartSubHeading } from '../../StyledComponents/SubHeading';
import { ImageWrapper, CloseIconWrapper, TitleWrapper } from '../../StyledComponents/Cart';
import { StyledParagraph, StyledSpan, StyledImage } from '../../StyledComponents/Elements';
import { StyledLink } from '../../StyledComponents/Link';

export const Image = ({src}) => (
    <ImageWrapper>
        <StyledImage src={src} alt="nordic skis"/>
    </ImageWrapper>
);

export const Title = ({id, name, size}) => (
   <CustomCol xxs={{size: 6, offset: 1}} sm="4" md={{size: 3, offset: 0}}>
       <TitleWrapper>
            <CartSubHeading>
                <StyledLink to={`/product/${id}`}>{name}</StyledLink>
            </CartSubHeading>
            <StyledParagraph>Size: {size}</StyledParagraph>
        </TitleWrapper>
    </CustomCol>
);

export const Price = ({price}) => (
    <CustomCol xxs="4" sm={{size: 2, offset: 3}} md={{offset: 0}}>
        <StyledParagraph centered>{price} €</StyledParagraph>
    </CustomCol>
);

export const Total = ({rowTotal}) => (
    <CustomCol xxs="5" sm="3" md="2">
        <StyledParagraph centered>
            <StyledSpan>Total: </StyledSpan>{rowTotal} €
        </StyledParagraph>
    </CustomCol>  
);

export const CloseIcon = ({onClick: handleClick}) => (
    <CloseIconWrapper onClick={handleClick}>
        <Icon name="times" size="lg" color="rgba(0, 0, 0, 0.5)" />
    </CloseIconWrapper>
);