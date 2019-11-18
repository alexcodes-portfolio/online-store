import React from 'react';
import { Button } from 'reactstrap';

/**
 * props: disabled, handleClick
 */
const AddButton = ({handleClick, disabled}) => (       
    <Button color="success" disabled={disabled} onClick={handleClick}>Add to cart</Button>
);

export default AddButton;