import React from 'react';
import NotFound from './Core/NotFound/NotFound';

const Error404 = () => (
    <NotFound
        heading="404: PAGE NOT FOUND"
        subheadings={[
            "The page you were looking for doesn't exist.",
            "Are you sure you typed the address correctly?"
        ]}
    />
);

export default Error404;