import React from 'react';
import styled from 'styled-components';
import { sm, lg, xl } from './MediaQueries';

export const SiteTitle = styled.h1`
    font-family: 'Comfortaa', sans-serif;
    font-size: 1.9rem;
    color: #fff;

    @media ${sm} {
        font-size: 2.5rem;
    }

    @media ${lg} {
        flex: auto;
        text-align: center;
        margin-bottom: 0;
    }

    @media ${xl} {
        flex: initial;
        text-align: initial;
    }
`;