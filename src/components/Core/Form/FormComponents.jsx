import React from 'react';
import Tooltip from './CustomTooltip';
import { MessageWrapper as Wrapper, StyledLabel, Required, FeedbackContainer } from '../../../StyledComponents/UserForm';

export const Label = ({children, ...rest}) => (
    <StyledLabel {...rest}>
        {children}
        <Required>&#42;</Required>
    </StyledLabel>
);

export const InputError = ({target, message}) => (
    <Wrapper>
        <Tooltip target={target} message={message} />
        <FeedbackContainer>{message}</FeedbackContainer>
    </Wrapper>
);