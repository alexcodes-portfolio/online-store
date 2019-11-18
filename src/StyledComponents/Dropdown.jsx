import styled from 'styled-components';
import { DropdownToggle, DropdownMenu } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { sm } from './MediaQueries';

export const StyledDropdownToggle = styled(DropdownToggle)`
  padding-bottom: 0;
  font-size: 1.5rem; 

  :link, :visited {
    color: #B6C7F0;
  }

  :hover, :active, .active, :focus {
    color: #AA8439; //pastel (monochromatic + complementary)
  }

  &::after {
    display: none;
  }

  @media (orientation: landscape), ${sm} {
    padding-bottom: .5rem;

    font-size: 1rem;

    :link, :visited {
      color: #fff;
    }

    :hover, :active, .active {
      color: #D3A447; //lighter pastel (yellow)
    } 

    &::after {
      display: inline-block;
    }
  }
`;

export const StyledDropdownMenu = styled(DropdownMenu)`
  display: block;
  background: inherit;
  border: none;

  @media (orientation: landscape), ${sm} {
    background: #5777C0;//full colors
    display: none;
  }
`;

export const StyledDropdownItem = styled(NavLink).attrs({
    className: 'dropdown-item'
  })`
    font-weight: 300;
    color: #B6C7F0 !important;   
  
    :hover, :active, &.active {
      color: #212529 !important;
      background: #DDE4E9;
      opacity: .8;
      outline: none;
    }
  
    @media (orientation: landscape), ${sm} {
      
      color: #fff;    
  
      :hover, :active, &.active,  :focus {
        color: #5777C0;//full colors
        background: #fff;
      }
    }
  `;