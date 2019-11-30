import React, { Component } from 'react';
import Product from './Product';
import RelatedProducts from './RelatedProducts';
import { productAddedLinks } from '../Core/Modal/ModalLinks';
import Loading from '../Loading';
import { ProductViewWrapper as Wrapper } from '../../StyledComponents/Product';
import { StyledHr } from '../../StyledComponents/Elements';
import API from '../../API/ProductAPI';
import Error404 from '../404';

/**
 * props: cart, updateCart, currentUser, onLoginStatusChange, search, searchResults, clearSearch, 
 *        toggleModal, history, location, match
 * state: product, relatedProducts, error
 */
class ProductView extends Component {
    constructor(props){
        super(props);
        this.state = {
           product: '',
           relatedProducts: [],
           error: false
        };        
   }

   abortController = new window.AbortController();

   componentDidMount(){
        this.loadProducts();
    }  

    componentDidUpdate(){
        const { product } = this.state;

        //1st condition is necessary in case of a 404 response
        if (product && this.props.match.params.productId != product.id){
            this.loadProducts();
        }

    }

    loadProducts() {
        const { signal } = this.abortController;

        this.getProduct(signal)
            .then(product => {
                //if reponse is not 404
                if (product) {
                    //get other products of this category
                    return this.getRelatedProducts(product, signal);
                }
            })
            .catch(err => err);
    }

    getProduct(signal){
        return API.getById(this.props.match.params.productId, signal)
            .then(result => {
                
                if (result.constructor === Error){
                    this.setState({error: true})
                    throw new Error('wrong product id');                   
                }

                this.setState({
                    product: result
                });
                return result;
            });
    }

    getRelatedProducts(currentProduct, signal){
        return API.getProductsByCategory(currentProduct.category, signal)
            .then(products => {
                return products.filter(
                    product => product.id !== currentProduct.id //exclude current product from the list of related p.
                );
            }).then(relatedProducts => 
                this.setState({
                    relatedProducts
                })
            ); 
    }

    //update product after it was added to the cart or removed from it and its quantity in stock has been modified
    updateProduct = () => {
        this.loadProducts();        
        //display modal notification that this product has been added to the cart
        this.props.toggleModal({
            isOpen: true,
            color: 'text-info',
            message: `${this.state.product.name} has been added to the cart.`,
            links: productAddedLinks
        });
    };

    componentWillUnmount() {
        this.abortController.abort();
    }

    render(){  
        const { product, relatedProducts, error } = this.state;

        if ( (! product && ! error) || (relatedProducts.length === 0 && ! error) ) {
            return <Loading />;
        }
        
        if (error) {
            return <Error404 />;
        }

        return (
            <Wrapper>
                <Product 
                    {...this.props} 
                    product={product} 
                    updateProduct={this.updateProduct}
                />
                <StyledHr marginBottom=".1em" />
                <StyledHr marginTop=".1em" />
                <RelatedProducts 
                    products={relatedProducts} 
                />
                <StyledHr marginBottom=".1em" />
                <StyledHr marginTop=".1em" />
            </Wrapper>
        );       
    }
}

export default ProductView;