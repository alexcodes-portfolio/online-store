import React from 'react';

const Icon = ({name, size, children, ...style}) => (
    <i className={`fas fa-${name} fa-${size}`} style={{...style}}>{children}</i>
); 

export default Icon;