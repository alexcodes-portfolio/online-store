import React from 'react';
import { Col } from 'reactstrap';

const CustomCol = (props) => (
    <Col widths={['xxs', 'xs', 'ms', 'sm', 'md', 'lg', 'xl', 'xxl', '_3xl', '_4k']} {...props} />
);

export default CustomCol;