import styled from 'styled-components';
import { Row } from 'reactstrap';
import CustomCol from '../components/Core/CustomCol';
import { sm, md, xl, _3xl } from './MediaQueries';

export const CartHeaderRow = styled(Row)`
    display: none;

    @media ${md} {
        display: flex;
    }
`;

export const TableRow = styled(Row)`
    align-items: flex-start;
    padding: 1em 0 .5em;
    border-bottom: .07em solid #eee;


    @media ${md} {
        align-items: stretch;
        padding: 1.5em 0;
    }
`;

export const ImageWrapper = styled(CustomCol).attrs({
    xxs: 3,
    md: 2
})`
    padding-bottom: 1em;
  
    @media ${sm} {
      padding-bottom: 0;
    }
`;

export const TitleWrapper = styled.div`
    @media ${md} {
        margin-left: 1rem;
        margin-right: 1rem;
    }

    @media ${xl} {
        margin-left: 2.5rem;
    }

    @media ${_3xl} {
        margin-left: 4.5rem;
    }
`;

export const CartTotalCol = styled(CustomCol).attrs({
    sm: {
        size: 'auto', 
        offset: 1
    }
})`
    padding-top: 1em;
`;

export const CloseIconWrapper = styled(CustomCol).attrs({
    xxs: {
        size: 1, offset: 1
    },
    sm: {offset: 3},
    md: {
        offset: 0, 
        order: 'last'
    }
})`
    align-self: flex-start;
    text-align: center;
`;

export const CardWrapper = styled(CustomCol).attrs({
    xs: 10,
    sm: 7,
    md: 5,
    xl: 4,
    _3xl: 3
})`
    text-align: center;
`;