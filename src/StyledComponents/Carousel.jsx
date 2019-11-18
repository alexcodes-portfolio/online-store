import React from 'react';
import styled from 'styled-components';
import { Row, CarouselItem, CarouselControl } from 'reactstrap';
import CustomCol from '../components/Core/CustomCol';
import { md } from './MediaQueries';

export const CarouselOuterWrapper = styled(Row)`
    justify-content: center;
    margin-top: .5em;
    margin-bottom: 2em;
    width: 100%;

    @media ${md} {
        margin: 2.5em 0 5em;
    }
`;

export const CarouselInnerWrapper = styled(({smScreen, lgScreen, ...props}) => <CustomCol {...props} />)`
    margin-top: .5em;
    display: ${props => props.lgScreen? 'none' : 'block'};
    @media ${md} {
        display: ${props => props.lgScreen? 'block' : 'none'};
    }
`;

export const StyledCarouselItem = styled(CarouselItem)`
    &.active {
        display: flex;  
        margin-right: 0;
        float: none;
        justify-content: space-evenly;

        _:-ms-lang(x), & {
          justify-content: center;

          @media ${md}{
            justify-content: space-around;
          }
        }

        align-items: baseline; //override default carousel item style: align-items center
    }
`;

export const StyledCarouselControl = styled(CarouselControl)`
  &.carousel-control-prev {
    justify-content: flex-start;
    padding-left: .5em;
    width: auto;
  }

  &.carousel-control-next {
    justify-content: flex-end;
    padding-right: .5em;
    width: auto;
  }

  & .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='eeeeee' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
  }

  & .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='eeeeee' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
  }
`;