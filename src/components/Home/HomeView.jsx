import React, { Component } from 'react';
import ProductRow from '../Core/Carousel/ProductRow';
import { Wrapper } from '../../StyledComponents/Elements';
import ProductAPI from '../../API/ProductAPI';
import Loading from '../Loading';

/**
 * props: history, location, match
 * state: categories [], Classic [], Skating []
 */
class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }

    abortController = new window.AbortController();

    componentDidMount() {
        const { signal } = this.abortController;

        ProductAPI.getCategories(signal) //get category names
            .then(categories => {
                    const products = this.getProducts(categories, signal); //get products of each category and store them in the state
                    Promise.all(products)
                        .then(() => this.setState({ //store the category name in the state
                            categories
                        })); 
                })
            .catch(err => err);
    }
    
    //get all products [{...}, {...}] of each category and store them in the state: Classic: [{},{}], Skating [{}]
    getProducts(categories, signal) {
        return categories.map(
            category => {
                return ProductAPI.getProductsByCategory(category, signal)
                    .then(products => this.setState({ 
                        [category]: products
                    }));
            }
        );
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    render(){  
        const { categories } = this.state;

        if (categories.length === 0) {
            return (<Loading />);
        }

      return (
            <Wrapper>
                {categories.map(
                    category => {
                        return <ProductRow categoryName={category} productGroup={this.state[category]} key={category} />
                    }
                )}
            </Wrapper>
        );
    }
}

export default HomeView;