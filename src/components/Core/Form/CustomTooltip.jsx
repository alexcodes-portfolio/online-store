import React from 'react';
import { StyledTooltip } from '../../../StyledComponents/UserForm';

const CustomTooltip = ({target, message}) => (
    <StyledTooltip placement="bottom" isOpen target={target}>
        {message}
    </StyledTooltip>
);

export default CustomTooltip;