import styled from 'styled-components';
import { Row, Input, Label, Tooltip } from 'reactstrap';
import CustomCol from '../components/Core/CustomCol';
import { md } from './MediaQueries';

export const FormWrapper = styled.div`
    padding-bottom: .5em;

    @media ${md} {
        padding-bottom: 2em;
    }
`;

export const StyledFormGroup = styled(Row).attrs({
    noGutters: true
})`
    margin-bottom: 1em;
`;

export const StyledInput = styled(Input).attrs({
    className: 'col-12 col-sm-10 offset-sm-1 col-md-5'
})`
    align-self: start;
    padding: 0.375rem 0.75rem !important;//overwrite .no-gutters > col padding
`;

export const StyledLabel = styled(Label).attrs({
    className: 'col-12 col-md-11 offset-sm-1'
})`
    font-size: 1.1rem;
`;

export const Required = styled.span`
    color: #AA3939;
`;

export const MessageWrapper = styled(CustomCol).attrs({
    xs: 12,
    md: {
        size: 4,
        offset: 1
    }
})`
    @media ${md} {
        display: flex;
        align-items: center;
    }    
`;

export const FeedbackContainer = styled.span`
    display: none;

    @media ${md} {
        display: block;
        position: absolute;//remove from text flow to prevent the next input from moving down if a message appears
        font-size: .9em;
        font-style: italic;
        color: #dc3545;
    }
`;

export const StyledTooltip = styled(Tooltip)`
    @media ${md} {
        display: none;
    }
`;