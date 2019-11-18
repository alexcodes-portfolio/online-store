import styled from 'styled-components';
import { Row } from 'reactstrap';
import { StyledImage } from './Elements';
import { md, xl } from './MediaQueries';

export const ProductsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export const ListItemRow = styled(Row)`
    margin-bottom: .8em;

    @media ${md} {
        margin-bottom: 1.5em;
    }

    @media ${xl} {
        margin-bottom: 1.8em;  
    }
`;


export const Thumbnail = styled(StyledImage).attrs({
    className: 'img-thumbnail',
    alt: 'product-img'
  })``;