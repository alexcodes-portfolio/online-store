import React from 'react';
import { Card } from 'reactstrap';
import { CardWrapper } from '../../StyledComponents/Cart';
import { CardHeading } from '../../StyledComponents/SubHeading';
import { StyledCartLink as Link } from '../../StyledComponents/Link';

const Message = () => (
    <CardWrapper>
        <Card body>
            <CardHeading>Your cart is empty.</CardHeading> 
            <CardHeading>
                <Link to='/'>Browse skis</Link>
            </CardHeading>
        </Card>
    </CardWrapper>  
);

export default Message;