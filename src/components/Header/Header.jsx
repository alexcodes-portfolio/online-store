import React, { Component } from 'react';
import NavLinks from './NavLinks';
import SearchBar from '../Search/SearchBar';
import CartLink from './CartLink';
import { loggedInLinks, loggedOutLinks } from './NavLinksData';
import Icon from '../Core/Icon';
import { SiteTitle } from '../../StyledComponents/SiteTitle';
import { StyledNavbar, StyledToggler, StyledCollapse, StyledNav, NavbarDivider, NavCloseIconWrapper as Wrapper } from '../../StyledComponents/Navbar';

/**
 * props: cart, search, onSearchSubmit, currentUser, onLoginStatusChange, toggleModal
 * state: quantity, isOpen
*/
class Header extends Component {
    constructor(props) {
      super(props);  
      this.state = {
        isOpen: false
      };
    }

    componentDidUpdate(prevProps) {
        if (this.props.cart !== prevProps.cart) {
            this.getNumberOfProducts();
        }
    }

    //get number of products displayed next to cart icon
    getNumberOfProducts() {
        if (!this.props.cart) return;
        let produtsNo = this.props.cart.reduce((acc, product) => {
            return acc + +product.selectedQuantity;
        }, 0);

        this.setState({
            quantity: produtsNo
        });
    }

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    //hide navbar after clicking a menu link
    hideNavbar = () => {
        if (this.state.isOpen){
            this.setState({
                isOpen: false
            });
        }
    }

    render(){    
        const { search, currentUser, onSearchSubmit, onLoginStatusChange, toggleModal } = this.props;

        return (
            <StyledNavbar expand="lg">
                <SearchBar onSearchSubmit={onSearchSubmit} search={search} positioned />
                <CartLink quantity={this.state.quantity} hideNavbar={this.hideNavbar} beforeNav />
                <StyledToggler onClick={this.toggle} />
                <NavbarDivider />
                <SiteTitle>Nordic Skis For Sale</SiteTitle>
                <StyledCollapse isOpen={this.state.isOpen} navbar>
                    <Wrapper onClick={this.hideNavbar}><Icon name="times-circle" size="3x" /></Wrapper>
                    <StyledNav navbar>
                        <NavLinks 
                            hideNavbar={this.hideNavbar} 
                            onLoginStatusChange={onLoginStatusChange} 
                            toggleModal={toggleModal}
                            items={currentUser? (loggedInLinks) : (loggedOutLinks)} 
                            user={currentUser} 
                        />
                        <CartLink quantity={this.state.quantity} hideNavbar={this.hideNavbar} />
                    </StyledNav>
                </StyledCollapse>
            </StyledNavbar>
        );
    }
  }

export default Header;