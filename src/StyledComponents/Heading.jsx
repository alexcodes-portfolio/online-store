import React from 'react';
import styled from 'styled-components';
import CustomCol from '../components/Core/CustomCol';
import { sm, md, lg } from './MediaQueries';
import { StyledLink } from './Link';

export const Heading = styled(CustomCol).attrs({
    tag: 'h2'
})`
    font-family: 'Comfortaa', sans-serif;
    font-size: 1.7rem;

    @media ${sm} {
        font-size: 2rem;
    }
`;

export const CartHeading = styled(Heading)`
    margin-bottom: 1rem;
`;

export const CarouselHeading = styled(Heading).attrs({
    xs: 12,
    sm: 11
})`
    border-bottom: 0.01em solid #eee;
`;

export const ProductHeading = styled(({smScreen, lgScreen, ...props}) => <Heading {...props} />)`
    padding-bottom: 1rem;
    display: ${props => props.lgScreen? 'none' : 'block'};

    @media ${sm} {
        padding-top: .25rem;
    }

    @media ${lg}{
        display: ${props => props.lgScreen? 'block' : 'none'};
    }
`;

export const ListHeading = styled(Heading).attrs({
    xs: 12,
    md: {size: 11, offset: 1},
    _3xl: {size: 10, offset: 2}
})`
    margin-bottom: .5em;

    @media ${md} {
        margin-bottom: .7em;
    }
`;

export const ErrorHeading = styled(Heading)`
    text-align: center;
`;

export const PrivacyPolicyHeading = styled(Heading)`
        text-align: left;
        word-break: break-word;
        
        @media only screen and (max-width: 479px) {
            font-size: ${props => props.as === 'h1'? '1.3rem' : 
                (props => props.as === 'h2'? '1.2rem' : 
                (props => props.as === 'h3'? '1.1rem' : '1rem'))};
        }

        @media only screen and (min-width: 768px) {
            font-size: 1.7rem;
        }
`;