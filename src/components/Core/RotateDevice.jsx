import React from 'react';
import { FullScreenContainer, CenteredCol } from '../../StyledComponents/Layout';
import { Heading } from '../../StyledComponents/Heading';

const RotateDevice = () => (
    <FullScreenContainer fluid>
        <CenteredCol>
            <Heading>Please rotate your device!</Heading>
        </CenteredCol> 
    </FullScreenContainer>
);

export default RotateDevice;