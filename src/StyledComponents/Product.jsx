import styled from 'styled-components';
import { Row } from 'reactstrap';
import CustomCol from '../components/Core/CustomCol';
import { Wrapper, StyledImage } from './Elements';
import { sm, md, lg, xl, _3xl } from './MediaQueries';

export const ProductViewWrapper = styled(Wrapper)`
    @media ${sm} {
      padding: 0 1em;
    }

    @media ${md} {
      padding: 0 3em;
    }

    @media ${xl} {
      padding: 0 4.5em;
    }
`;

export const ProductWrapper = styled(Row)`
    justify-content: center;  
    
    @media ${sm} {
        margin-bottom: 1em;
    }

    @media ${md} {
        margin-bottom: 1.5em;

        justify-content: space-evenly;
        _:-ms-lang(x), & {
          justify-content: space-around;
        }
    }

    @media ${xl} {
        margin-bottom: 3em;
    }

    @media ${_3xl} {
        
        margin: 6em 0;
    }

   
`;

export const RelatedProductsWrapper = styled(Row)`
    margin-top: 1em;

    @media ${md}{
        margin-top: 3em;
    }
`;

export const ProductImgWrapper = styled(CustomCol).attrs({
    xxs: 12,
    sm: 10,
    lg: 5,
    xl: 4,
    _3xl: 3
})`
    align-self: flex-start;
 
    @media ${md} {
        margin-bottom: 1.5em;
    }
`;        

export const ProductImg = styled(StyledImage)`
  @media ${sm} {
    cursor: zoom-in;
  }

  ${props => props.fullSize && 
    `display: none;

     @media ${sm} {
      display: block;
      max-height: 100%;
      max-width: 80%;
      z-index: 1071;//same z-index as navbar but later in document tree
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);  
      cursor: zoom-out;
      padding: 1em;
      background: #fff;
      cursor: zoom-out;
    }`
  }
`;

export const Backdrop = styled.div`
  display: none;
  
    @media ${sm} {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1071;//same z-index as navbar but later in document tree
      background: #000;
      opacity: .8;
    }
  
`;