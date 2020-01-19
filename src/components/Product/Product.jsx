import React, { Component } from 'react';
import CustomCol from '../Core/CustomCol';
import Select from '../Core/Form/Select';
import AddButton from '../Core/Buttons/AddButton';
import Image from './Image';
import { getAvailableQuantity } from '../Core/Functions';
import { ProductWrapper } from '../../StyledComponents/Product';
import { ProductHeading } from '../../StyledComponents/Heading';
import { StyledParagraph, StyledHr } from '../../StyledComponents/Elements';
import CartAPI from '../../API/CartAPI';
import ProductAPI from '../../API/ProductAPI';
import { ImgExtensionContext } from '../Core/Context';

/**
 * props: product, updateProduct, cart, updateCart, currentUser, onLoginStatusChange,
 *        search, searchResults, clearSearch,  h., l., m.
 * state: selectedSize, selectedQuantity, fullSizeImg
 * context: imgExtension
 */
class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedSize: '',
            selectedQuantity: 0
        };
    }

    /**
     * this.props.product = {
     *      id,
     *      name,
     *      description,
     *      category,
     *      imgUrl,
     *      price,
     *      sizes: [
     *          { size: 'M', quantity: 10 },
     *          { size: 'L', quantiy: 8 }, ...    
     *      ]     
     * }
     */

    componentDidMount(){
        this.setInitialSelectVal();
    }

    setInitialSelectVal(){
        this.setState({
            selectedSize: this.props.product.sizes[0].size,
            selectedQuantity: 1
        });
    }

    //generate options for sizes select
    getAvailableSizes = () => {
        //return only those sizes that have not been sold out
        return this.props.product.sizes.map(item => {                         //['M', 'L', ...]
            return item.quantity > 0? item.size : `${item.size} - sold out`; 
        });
    };

    //create object containing all the data required for putting a product to the cart
    getAllProductData(){
        const { currentUser, product } = this.props;
        const { selectedSize, selectedQuantity } = this.state;

        return {
            userId: currentUser ? currentUser.id : null,
            product,
            productId: product.id,
            selectedSize,
            selectedQuantity
        };
    }
    
    handleClick = e => {
        const data = this.getAllProductData();

        CartAPI.addToCart(data)
            .then(product => ProductAPI.updateStock('remove', product)) //reduce the number of products in stock
            .then(() => this.props.updateProduct())   //reload product (new data in select)
            .then(() => this.props.updateCart())      //update cart so that the number next to cart icon changes if necessary
            .catch(err => err);  
    };

    handleSelectChange = (name, value) => {
        this.setState({
            [name]: value
        });       
    };

    toggleFullSize = (e) => {
        this.setState({
            fullSizeImg: !this.state.fullSizeImg
        });
    };

    componentDidUpdate(prevProps){
        const { product: currentProduct } = this.props, 
            { product: prevProduct } = prevProps;
            
        //if a new product in the related products row was clicked 
        if (prevProduct !== currentProduct){
            document.body.scrollIntoView();
        }

        if (prevProduct !== currentProduct){
            this.setInitialSelectVal();            
        }
    }

    render(){
        const { product: { name, imgUrl: path, description, price }, } = this.props;
      

        //fill select with options
        const sizesSelectOptions = this.getAvailableSizes(); 
        const quantitySelectOptions = getAvailableQuantity(this.props.product.sizes, this.state.selectedSize);
         
        return (
            <ProductWrapper noGutters>
                <ProductHeading xs="12" smScreen>{name}</ProductHeading>
                <ImgExtensionContext.Consumer>
                    { imgExtension => (
                        <Image 
                            path={path} 
                            fullSizeImg={this.state.fullSizeImg}
                            toggleFullSize={this.toggleFullSize} 
                            imgExtension={imgExtension}
                        />
                    )}
                </ImgExtensionContext.Consumer>
                <StyledHr displayMd="none" />

                <CustomCol xxs="12" sm="10" lg="5" xl="4">
                
                    <ProductHeading lgScreen>{name}</ProductHeading>

                    <StyledParagraph>{description}</StyledParagraph>
                    
                    <StyledParagraph>Price: {price.toFixed(2)} €</StyledParagraph>
                
                    <Select 
                        items={sizesSelectOptions} 
                        name="selectedSize" 
                        title="Size" 
                        handleSelectChange={this.handleSelectChange} 
                        value={this.state.selectedSize} 
                        displayAddon
                        xxs="7" xs="6" ms="4" lg="6"
                    />
                    {quantitySelectOptions.length !== 0 && 
                        <Select 
                            items={quantitySelectOptions} 
                            name="selectedQuantity" 
                            title="Quantity" 
                            handleSelectChange={this.handleSelectChange} 
                            value={this.state.selectedQuantity}
                            displayAddon
                            xxs="7" xs="6" ms="4" lg="6"
                        />
                    }   
                    <AddButton 
                        handleClick={this.handleClick} 
                        disabled={quantitySelectOptions.length === 0}
                    />    
                </CustomCol>                            
            </ProductWrapper>
        );
    }
}

export default Product;