import React from 'react';
import Icon from '../Icon';
import { ScrollIconWrapper } from '../../../StyledComponents/Extras';

const ScrollToTopButton = () => {

    function handleClick() {
        document.body.scrollIntoView();
    }

    return (
        <ScrollIconWrapper onClick={handleClick}>
            <Icon name="arrow-alt-circle-up" size="2x" color="#648FF3" />
        </ScrollIconWrapper>
    );
};

export default ScrollToTopButton;