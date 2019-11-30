import React, { Component } from 'react';
import List from '../Core/List/List';
import Error404 from '../404';
import ProductAPI from '../../API/ProductAPI';

/**
 * props: history, location, match
 * state: category, products
 */
class CategoryView extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: this.getCategory(props),
            products: []
        }
    }

    abortController = new window.AbortController();

    componentDidMount(){        
        this.getProducts();
    } 

    componentDidUpdate(prevProps){
        const currentCategory = this.getCategory(this.props);
        
        if (this.getCategory(prevProps) !== currentCategory) {
            this.reloadProducts(currentCategory);
        }
    }

    getProducts(){
        ProductAPI.getProductsByCategory(this.state.category, this.abortController.signal)
        .then(products => {
            this.setState({
                products: products
            });            
        });
    }  

    //reload products if another category is clicked in the dropdown menu
    reloadProducts(category){
        this.setState({
            category
        });
        Promise.resolve()
            .then(() => this.getProducts())
            .catch(err => console.log(err));
    }

    getCategory(props){
        return props.match.params.category;
    } 
    
    componentWillUnmount() {
        this.abortController.abort();
    }

    render(){
        const { category, products } = this.state;

        if (! products) {
            return <Error404 />;
        }

        return <List title={category} items={products}/>;
    }
}

export default CategoryView;