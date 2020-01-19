import React, { Component } from 'react';
import CustomCol from '../Core/CustomCol';
import { Image, Price, Title, Total, CloseIcon } from './CartComponents'; 
import Select from '../Core/Form/Select';
import { TableRow } from '../../StyledComponents/Cart';
import CartAPI from '../../API/CartAPI';
import ProductAPI from '../../API/ProductAPI';
import { getAvailableQuantity } from '../Core/Functions';
import { ImgExtensionContext } from '../Core/Context';

/**
 * props: product, updateCart, rowTotal, updateTotalCartPrice, createModal
 * state: selectedQuantity
 * context: imgExtension
 */
class CartRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedQuantity: props.product.selectedQuantity
        };
    }

    componentDidMount(){
        this.props.updateTotalCartPrice();
    }

    //if another select option is picked or the product removed altogether
    handleChange(cartAction, stockAction, value){

        const { product, updateCart } = this.props; //product from the cart
       

        CartAPI[cartAction](product, value)
            .then( () => {
                //update the product quantity in stock so that select in productView shows correct number of items still available
                ProductAPI.updateStock(stockAction, product);

                //update the number next to the cart icon
                updateCart(true);

                //display modal if the product has been removed 
                cartAction.includes('delete') && this.createModal(product);
            });
    }

    //product.sizes in the cart is not modified, only in the stock
    handleSelectChange = (name, value) => {
        this.setState({
            selectedQuantity: value
        });
        this.handleChange('replaceQuantity', 'update', value);
    };

    //pass the removed product to the parent component in order to show modal
    createModal(value) {
        this.props.createModal(value);
    }

    remove = () => {
        this.handleChange('deleteFromCart', 'reset');
    };
   
    render(){

        const { product: { imgUrl, productId, name, sizes, selectedSize, price }, rowTotal, imgExtension } = this.props;          

        const quantitySelectOptions = getAvailableQuantity(sizes, selectedSize);

        return (
            this.context && <TableRow noGutters>
               
                <Image src={require(`../../img/${imgUrl}.${this.context}`)} />
                
                <Title id={productId} name={name} size={selectedSize} />
                
                <CloseIcon onClick={this.remove} />
               
                <Price price={price.toFixed(2)} />
                
                <CustomCol xxs="3" md="2">
                    <Select 
                        items={quantitySelectOptions} 
                        name="selectedQuantity" 
                        title="Quantity" 
                        handleSelectChange={this.handleSelectChange} 
                        value={this.state.selectedQuantity} 
                        centered
                        xxs="11" xs="10" sm="7" md="8" lg="7" xl="6" xxl="5" _3xl="4" _4k="3"
                    />                    
                </CustomCol>

                <Total rowTotal={rowTotal.toFixed(2)} />
            
            </TableRow>
        );
    }
}

export default CartRow;

CartRow.contextType = ImgExtensionContext;