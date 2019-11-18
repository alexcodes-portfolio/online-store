import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0 !important; //override modal's padding-right 16px on body
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
    }
`;

export default GlobalStyle;