import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { sm } from './MediaQueries';

export const StyledLink = styled(Link)`
    :link, :visited {
        color: rgba(0, 0, 0, 0.5);
    }

    :hover, :active, &.active, :focus {
        text-decoration: none;
        color: rgba(0, 0, 0, .32);
    } 
`;

export const StyledNavLink = styled(({cartLink, ...props}) => <NavLink {...props} />).attrs({
    className: 'nav-link'
  })`
    font-size: 1.5rem; 
  
    :link, :visited {
      color: #B6C7F0;
    }
  
    :hover, :active, &.active, :focus {
      color: #AA8439; //pastel (monochromatic + complementary)  
    }
  
    @media (orientation: landscape), ${sm} {
      font-size: 1rem;
  
      :link, :visited {
        color: #fff;
      }
  
      :hover, :active, &.active {
        color: ${props => props.cartLink? '#D4B16A' : '#D3A447'}; //pastel : lighter pastel (yellow)
      } 
    }
  `;

export const StyledCartLink = styled(Link)`
    &:link, &:visited {
        color: #5777C0;//full colors
    }

    &:hover, &:active, &.active {
        color: #8598C4;//lighter pastel
    } 
`;  

export const StyledModalLink = styled(({blueBtn, ...props}) => <Link {...props} />).attrs({
  className: 'btn'
})`
  font-weight: 300;

  :link, :visited {
    color: #fff;
  }

  :link, :visited {
    background: ${props => props.blueBtn? '#2E4172' : '#AA8439'}; //pastel
  }
  :hover, :focus, :active, &.active {
    background: ${props => props.blueBtn? '#5F7EC6' : '#D3A447'}; //very light pastel : lighter pastel
  }

  @media ${sm} {
    font-size: 1.2rem;
  }
`;