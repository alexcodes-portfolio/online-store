import React from 'react';
import { Row } from 'reactstrap';
import ListItem from './ListItem';
import { Wrapper } from '../../../StyledComponents/Elements';
import { ListHeading } from '../../../StyledComponents/Heading';
import { ProductsList } from '../../../StyledComponents/List';

/**
 * props: title, items
 */
const List = ({title, items}) => {
    
    const listItems = items.map(
        item => <ListItem item={item} key={item.id} />
    );
    
    return (
        <Wrapper>
            <Row>
                <ListHeading>{title}</ListHeading>
            </Row>
            <ProductsList>{listItems}</ProductsList>
        </Wrapper>
    );
};

export default List;
//used in CategoryView and SearchResultsView