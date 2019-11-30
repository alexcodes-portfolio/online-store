import { products } from './Paths';
import { handle404 } from '../components/Core/Functions';

const ProductAPI = {
    
    currentSearch: '',
    searchResults: null,

    getAll(signal){
        return fetch(products, {signal})
            .then(handle404)
            .then(response => response.json())
            .then(products => products)
            .catch(err => err
        );
    },
    //get an array of category names
    getCategories(signal){
        return this.getAll(signal)
            .then(products => {
                //remove duplicate category items
                return products.reduce((categories, product) => {
                    if (categories.includes(product.category) === false) {
                        categories.push(product.category);
                    }
                    return categories;
                }, []);
            })
    },
    //get products of a certain category
    getProductsByCategory(category, signal){
        return this.getAll(signal)
            .then(products => {
                return products.filter(
                    product => product.category === category
                );
            })
            .catch(err => err);
    },
    getById(id, signal){
        return fetch(`${products}/${id}`, {signal})
            .then(handle404)
            .then(response => response.json())
            .then(product => product)
            .catch(err => err
        );        
    },
    search(search, signal){
        if (search === this.currentSearch){
            return new Promise(resolve => {
                resolve(this.searchResults);
            });
        }
        return fetch(
            `${products}?q=${search}`, {signal}
        ).then(
            response => response.json()
        ).then(
            searchResults => {
                this.currentSearch = search;
                this.searchResults = searchResults;
                return searchResults
            }
        ).catch(err => err);
    },
    /**
     * ---------------
     * STOCK
     * ---------------
     */
    updateStock(action, product){
        //action: 'remove' or 'reset' or 'update'
        /**
         * product from the cart or about to be placed in the cart:
         * product = { 
         *      productId: ...,    -> ID in the products list
         *      name: ..., description: ..., category: ..., imgUrl: ..., price: ..., 
         *      selectedQuantity: ..., selectedSize: ...,
         *      sizes: [
         *          { size: 'M', quantity: 10 },
         *          { size: 'L', quantiy: 8 }, ...    
         *      ]     
         * }
         */
        const { productId, selectedSize, selectedQuantity } = product;

        //get max. available number of products, not counting products already put in this cart
        const totalAvailableQuantity =  product.sizes.find(item => selectedSize === item.size).quantity;

        return this.getById(productId) //get product from the stock
            .then(product => {   
                //get the object with the current size (stock)

                let currentSize = product.sizes.find(item => selectedSize === item.size); 
            
                this[action](currentSize, selectedQuantity, totalAvailableQuantity);
            
                return product;
                
            })
            .then(product => this.saveChanges(product));
    },
    //reduce the number of products in stock if products are added to cart in the productView
    remove(currentSize, selectedQuantity){
        //currentSize: { size: '...', quantity: ...}
        if (selectedQuantity === 1){
            currentSize.quantity--;
        } else {
            currentSize.quantity = currentSize.quantity - selectedQuantity;
        }
    },
    //reset the number of products in stock if the product is removed from the cart
    reset(currentSize, selectedQuantity, totalAvailableQuantity){
        currentSize.quantity = totalAvailableQuantity;
    },
    //update the number of products in stock if the quantity of products in the cart is changed in the cartView
    update(currentSize, selectedQuantity, currentTotalQuantity){
        currentSize.quantity = currentTotalQuantity - selectedQuantity;
    },
    //save the changes to the server after the number of available products in stock has changed
    saveChanges(product){
        return fetch(`${products}/${product.id}`, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
            }).then(result => result);
    },
};

export default ProductAPI;