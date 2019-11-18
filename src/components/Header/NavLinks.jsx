import React from 'react';
import { NavItem, UncontrolledDropdown } from 'reactstrap'; 
import LinkWrapper from './LinkWrapper';
import Icon from '../Core/Icon';
import { UnstyledSpan as Wrapper } from '../../StyledComponents/Elements';
import { StyledDropdownMenu as DropdownMenu, StyledDropdownToggle as DropdownToggle, StyledDropdownItem as DropdownItem } from '../../StyledComponents/Dropdown';
import { UserName } from '../../StyledComponents/Navbar';
import { StyledNavLink as NavLink } from '../../StyledComponents/Link';

const NavLinks = ({ items, hideNavbar, toggleModal, onLoginStatusChange, user }) => ( 
    
    items.map(
        ({to, title}) => 
            //handle a simple link and a link to dropdown menu differently
            Array.isArray(to)? 
                <UncontrolledDropdown nav inNavbar key={to}>
                    <DropdownToggle nav caret>
                        { !title ? 
                            <Wrapper><Icon name="user"/><UserName>{user.username}</UserName></Wrapper> 
                        : 
                            title
                        }
                    </DropdownToggle>
                    <DropdownMenu right>
                        {to.map(
                            ({to, title}) => (
                                <LinkWrapper 
                                    CustomNavLink={DropdownItem} 
                                    to={to} 
                                    children={title} 
                                    key={to} 
                                    toggleModal={toggleModal}
                                    onLoginStatusChange={onLoginStatusChange}
                                    hideNavbar={hideNavbar} 
                                />
                        ))}
                    </DropdownMenu>
                </UncontrolledDropdown>
                :
            <NavItem key={to}>
              <LinkWrapper 
                CustomNavLink={NavLink} 
                to={to} 
                children={title} 
                activeClassName={to !== '/'? 'active' : ''} 
                hideNavbar={hideNavbar}
            />
            </NavItem>
               
    )  
);     

export default NavLinks;