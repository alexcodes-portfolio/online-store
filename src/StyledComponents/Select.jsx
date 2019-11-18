import React from 'react';
import styled from 'styled-components';
import { Row, Input, InputGroup, InputGroupText } from 'reactstrap';
import CustomCol from '../components/Core/CustomCol';
import { sm, md } from './MediaQueries';

export const FormRow = styled(({centered, ...props}) => <Row {...props} />)`
    justify-content: ${props => props.centered? 'center' : 'normal'}
    margin: 0 -0.313em;

    @media ${md} {
        justify-content: normal;
    }
`;

export const SelectContainer = styled(CustomCol)`
    padding: 0 0.313em;
`;

export const StyledSelect = styled(Input).attrs({
    type: 'select'
})`
    &.form-control:focus {
        box-shadow: none;
    }
`;

export const StyledInputGroup = styled(InputGroup)`
    margin-bottom: 1rem;
    font-size: .9rem;

    @media ${sm} {
        font-size: 1rem;
    }
`;

export const StyledInputGroupText = styled(InputGroupText)`
    font-size: .9rem;

    @media ${sm} {
        font-size: 1rem;
    }
`;