import React from 'react';
import styled from 'styled-components';
import { CardTitle } from 'reactstrap';
import { md, lg } from './MediaQueries';

export const SubHeading = styled.h3`
    font-family: 'Comfortaa', sans-serif;
    font-size: 1.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media ${lg} {
        font-size: 1.75rem;
    }
`;

export const CarouselSubHeading = styled(SubHeading)`
    text-align: center;
`;

export const ListSubHeading = styled(SubHeading)`
    margin-bottom: 0;
    margin-top: .5rem;
`;

export const CartSubHeading = styled.h4`
    font-family: 'Comfortaa', sans-serif;  
    font-size: 1.4rem;
`;

export const ColumnHeading = styled.h5`
    font-family: 'Comfortaa', sans-serif;   
`;

export const CardHeading = styled(CardTitle)`
    font-family: 'Comfortaa', sans-serif;   

    @media ${md} {
        font-size: 1.5rem;
    }
`;

export const ErrorSubHeading = styled.h4`
    font-family: 'Comfortaa', sans-serif;   
    text-align: center;
`;