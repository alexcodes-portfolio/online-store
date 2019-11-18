import React from 'react';
import { ProgressWrapper as Wrapper, StyledProgress as Progress } from '../StyledComponents/Extras';

const Loading = () => (
    <Wrapper>
        <Progress animated value="50" />
    </Wrapper>
);

export default Loading;