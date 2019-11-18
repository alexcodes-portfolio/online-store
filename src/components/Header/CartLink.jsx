import React from 'react';
import LinkWrapper from './LinkWrapper';
import Icon from '../Core/Icon';
import { StyledNavItem as NavItem, StyledBadge } from '../../StyledComponents/Navbar';
import { StyledNavLink as NavLink } from '../../StyledComponents/Link';

const CartLink = ({quantity, hideNavbar, ...props}) => (
    <NavItem {...props} cart>
        <LinkWrapper 
            CustomNavLink={NavLink} 
            cartLink
            to='/cart' 
            children={
                <Icon name="shopping-cart" size="lg">
                    <StyledBadge>{quantity > 0 && quantity}</StyledBadge>
                </Icon>
            }
            activeClassName='active'
            hideNavbar={hideNavbar}
        />
    </NavItem>
);

export default CartLink;