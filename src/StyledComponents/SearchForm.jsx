import React from 'react';
import styled from 'styled-components';
import { Form, Input } from 'reactstrap';
import {sm, lg, xl } from './MediaQueries';

export const SearchForm = styled(({positioned, ...props}) => <Form {...props} />)`
    margin-top: 1em;

    @media ${sm} {
        margin: .5em 0;
    }

    @media ${lg} {
        margin: 0;
        //in the header: remove from text flow to center the title
        position: ${props => props.positioned? 'absolute' : 'static'};
        top: 1em;
    }

    @media ${xl} {
        position: static;
    }
`;

export const SearchInput = styled(Input).attrs({
    type: 'search',
    placeholder: 'Search'
})`
    background: #E5ECFB;//lightest pale pastel
    border-color: #365BB0;

    &:focus {
        border-color: #365BB0;
        box-shadow: none;
        background: #fff;
    }

    @media ${sm} {
        margin-right: .5em;
    }
`;