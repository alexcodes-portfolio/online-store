import React, { Component } from 'react';
import { Row } from 'reactstrap';
import CustomCol from '../Core/CustomCol';
import Message from './Message';
import CartRow from './CartRow';
import { cartModalLinks } from '../Core/Modal/ModalLinks';
import CartHeader from './CartHeader';
import { CenteredRow } from '../../StyledComponents/Layout';
import { CartHeading } from '../../StyledComponents/Heading';
import { CartTotalCol } from '../../StyledComponents/Cart';
import { StyledParagraph, Wrapper } from '../../StyledComponents/Elements';

/**
 * props: cart, updateCart, currentUser, onLoginStatusChange, search, searchResults, clearSearch, toggleModal
 * state: prices, cartTotal
 */
class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prices: []
        };
    } 

    updateCart = status => {
        if (status){
            this.props.updateCart();
        }
    };

    updateTotalCartPrice = () => {
        //get an array of all prices
        let prices = this.props.cart.map(product => this.calculateRowTotalPrice(product));

        //sum prices to get the total price of the cart, unless there are no products in the cart (return 0)
        let pricesSum = prices.length? prices.reduce((acc, price) => acc + price) : 0;

        this.setState({
            cartTotal: pricesSum.toFixed(2)
        });
    };

    //total price of each row will be passed as 'rowTotal' prop 
    calculateRowTotalPrice = product => {
        let price = product.price * product.selectedQuantity;
        return +price.toFixed(2)
    };
    
    //pass data to modal and scroll modal into view
    createModal = product => {
        document.body.scrollIntoView();
        this.props.toggleModal({
            isOpen: true,
            message: `${product.name} has been removed from the cart.`,
            links: cartModalLinks
        });
    };

    componentDidUpdate(prevProps) {
        //update total price if any product is removed from the cart
        if (this.props.cart !== prevProps.cart) {
            this.updateTotalCartPrice();
        }
    }

    render(){       
        const { cart } = this.props;
        
        return (
            <CenteredRow>
                {cart.length === 0?  
                    <Message />         
                : 
                    <CustomCol lg="11">
                        <Row>
                            <CartHeading>Cart</CartHeading>
                        </Row>  
                        <Wrapper>
                            <CartHeader />                                    
                            {cart.length > 0 &&
                                cart.map(
                                    product => 
                                        <CartRow 
                                            product={product} 
                                            key={JSON.stringify(product)} 
                                            updateCart={this.updateCart}
                                            createModal={this.createModal} 
                                            updateTotalCartPrice={this.updateTotalCartPrice}
                                            rowTotal={this.calculateRowTotalPrice(product)}
                                        />
                                )                            
                            }
                            <Row noGutters>
                                <CartTotalCol>
                                    <StyledParagraph>Total: {this.state.cartTotal}</StyledParagraph>
                                </CartTotalCol>
                            </Row>                                
                        </Wrapper>
                    </CustomCol>    
                }
            </CenteredRow>
        );
    }
}

export default CartView;