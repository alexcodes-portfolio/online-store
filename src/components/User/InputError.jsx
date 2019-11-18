import React from 'react';
import { FormFeedback } from 'reactstrap';

const InputError = ({message}) => (
    <FormFeedback>{message}</FormFeedback>
);

export default InputError;