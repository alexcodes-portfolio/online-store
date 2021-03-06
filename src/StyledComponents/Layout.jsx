import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'reactstrap';
import CustomCol from '../components/Core/CustomCol';
import { md } from './MediaQueries';

export const MainContainer = styled(Container)`
    margin-top: 1.5em;

    @media ${md} {
        margin: 4em 0 3em;
    }
`;

export const CenteredRow = styled(({fullWidth, ...props}) => <Row {...props} />)`
    justify-content: center;
    width: ${props => props.fullWidth? '100%' : 'auto'};
`;

export const CenteredCol = styled(props => <CustomCol xxs="12" {...props} />)`
    text-align: center;
    margin-top: 2em;
    margin-bottom: 2em;
`;

export const FullScreenContainer = styled(Container)`
    position: fixed;
    top: 0;
    z-index: 2000;
    background: white;
    height: 100vh;
    display: flex;
    align-items: center;
`;