import React from 'react';
import { Link } from 'react-router-dom';
import CustomCol from '../CustomCol';
import { ListItemRow, Thumbnail } from '../../../StyledComponents/List';
import { ListSubHeading } from '../../../StyledComponents/SubHeading';
import { StyledParagraph } from '../../../StyledComponents/Elements';
import { StyledLink } from '../../../StyledComponents/Link';

/**
 * props: item
 */
const ListItem = ({item}) => (
    <li>
        <ListItemRow>
            <CustomCol xxs="12" sm="6" md={{size: 4, offset: 1}} _3xl={{size: 3, offset: 2}}>
                <Link to={`/product/${item.id}`}>
                    <Thumbnail src={require(`../../../img/${item.imgUrl}`)} />
                </Link>
            </CustomCol>
            <CustomCol xxs="12" sm="6" md="5">
                <ListSubHeading>
                    <StyledLink to={`/product/${item.id}`}>{item.name}</StyledLink>
                </ListSubHeading>
                <StyledParagraph>Price: €{item.price}</StyledParagraph>
            </CustomCol>           
        </ListItemRow>
    </li>
);

export default ListItem;