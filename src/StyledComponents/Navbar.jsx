import styled from 'styled-components';
import { Navbar, NavbarToggler, Collapse, Nav, Badge } from 'reactstrap';
import { StyledHr } from './Elements';
import { sm, md, lg, xl } from './MediaQueries';

export const StyledNavbar = styled(Navbar)`
  position: static;//override bootstrap position relative to get .navbar-collapse to stretch to 100% of window
  background: #365BB0;//full colors
  box-shadow: 0 0.2em 1em #39528D;

  @media (orientation: portrait) and (min-width: 576px), (orientation: landscape) and (min-width: 992px) {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1071;//display in front of bootstrap tooltip with default z-index 1070
  }

  @media (min-width: 768px) {
    min-height: 4rem;
  }

  @media (min-width: 992px){
    flex-wrap: wrap; //override bs no-wrap of expanded navbar to move .navbar-collapse onto a new line
  }

  @media (min-width: 1200px) {
    justify-content: space-around;
    min-height: 5.5rem;
  }
`;

export const StyledToggler = styled(NavbarToggler)`
  border-color: #5777C0;
  outline: none;
  margin-left: 1em;

  @media (orientation: landscape), ${sm} {
    margin-bottom: .5em; 
  }

  @media ${md} {
    margin-bottom: 0;
  }

  &:focus {
    outline: none;
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(255,255,255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }  
`;

export const StyledCollapse = styled(Collapse)`
  display: flex;
  flex-direction: column;
  justify-content: center; //vertically center menu
  position: absolute;
  top: 0;
  z-index: 1071;//display in front of bootstrap tooltip with default z-index 1070
  width: 100%;
  height: 100%;
  background: #2E4172; //pastel
  transition: left .6s ease-in-out, opacity .8s ease-in;

  &.collapsing {
    height: 100% !important; //override bootstrap (height: 0)
  }

  &:not(.show) {
    left: -100%;
    opacity: .7;
  }

  &.show {
    left: 0;
    opacity: 1;
  }

  @media (orientation: landscape), ${sm} {
    display: block;
    position: static;
    background: transparent;

    &:not(.show) {
      opacity: 1;
    }
  }

  @media ${md} {
    order: 13;
  }

  @media ${lg} {
    flex-grow: 0;
  }

  @media ${xl} {
    width: auto;//previously 100% and occupied the whole line
  }
`;

export const StyledNav = styled(Nav)`
  justify-content: center;
  height: 100%;
  background: #2E4172; //pastel
  padding: 10%;
  border-left: 0.063em solid #B6C7F0;//very light pastel

  @media (orientation: landscape), ${sm} {
    background: #365BB0;
    padding: 0;
    border: none;
  }
`;

export const StyledNavItem = styled.li`
  display: ${props => props.beforeNav? 'none' : 'list-item'};  
  flex: ${props => props.beforeNav? 'auto' : 0};
  text-align: ${props => props.beforeNav? 'right' : 'left'};
  list-style-type: none;
  color: #fff;
  margin-bottom: .5em;

  @media ${sm} {
    display: ${props => props.beforeNav? 'list-item' : 'none'};
  }

  @media ${md} {
    order: ${props => props.beforeNav? '13' : 'initial'};
    flex-grow: 1;
  }

  @media ${lg} {
    margin-bottom: 0;
    display: ${props => props.beforeNav? 'none' : 'list-item'};
  }
`;

export const StyledBadge = styled(Badge)`
  padding-left: .25em;
  margin-right: -1rem;
  background: #2E4172; //pastel
  color:  #B6C7F0;  

  a:hover &, a:active &, a.active &, a:focus & {
    color: #AA8439; //pastel (monochromatic, 2 col.)
  }

  @media (orientation: landscape), ${sm} {
    background: #365BB0; //pastel
    color: #fff;

    a:hover &, a:active &, a.active &, a:focus & {
      color: #D4B16A;//pastel
    }
  }
`;

export const NavCloseIconWrapper = styled.span`
  position: absolute;
  top: 2%;
  right: 6%;
  color: #B6C7F0; //very light pastel

  @media (orientation: landscape), ${sm} {
    display: none;
  }
`;

export const UserName = styled.span`
  padding-right: .1em;
  padding-left: .4em;
`;

export const NavbarDivider = styled(StyledHr)`
  border-top-color: #5777C0; //full colors
  margin-top: .5em;
  
  @media ${lg} {
    display: none;
  }
`;