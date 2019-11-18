import { cart, users } from './Paths';
//localStorage.cart only contains items added before logging in!

const CartAPI = {
    getCart(user){
        if(!user){
            return this.getCartFromStorage();
        }

        return fetch(`${users}/${user.id}/cart`)
            .then(response => response.json())
            .then(cart =>  {
                if (!cart) cart = [];
                return cart;
            })
            .catch(err => err);
    },
    getCartFromStorage(){
        let cart = localStorage.getItem('cart');
        if (!cart){
            cart = localStorage.setItem('cart', JSON.stringify([]));
        }
        return Promise.resolve(JSON.parse(cart));
    },
    updateCartInStorage(cart){
        if ( !cart ) {
            return Promise.reject(new Error('The cart was not passed as argument'))
                .then(() => {}, err => err);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        return Promise.resolve(cart);
    },
    /** add product to cart: 
    * 1. clicking 'Add' button 
    * 2. when a non-logged in user adds products to cart, and then logs in so the 2 carts are combined
    */
    addToCart({product, productId, selectedSize, selectedQuantity, userId = null}){   
         
        let submittedProduct = {...product, productId, selectedSize, selectedQuantity};
        delete submittedProduct.id;   

        return this.checkIfInCart(userId, productId, selectedSize)
            .then(product => {          
                if (product !== undefined){      
                    this.increaseQuantity(product, selectedQuantity);
                    /** the only property of the product in cart that is modified is selectedQuanity. 
                    * product.sizes in cart stay the same! Only product.sizes in stock are modified 
                    */
                } else {                 
                    this.addNewProduct(userId, submittedProduct);
                    /**
                     * submittedProduct -> product from the 'stock'. 
                     * submittedProduct.sizes[selectedSize] is REAL max. available quantity (10 minus products in other users' carts)
                     * as opposed to sizes[selectedSize] in the cart.
                     */
                }

                return submittedProduct;
                /**
                 * submittedProduct = { productId, name, description, category, price, imgUrl, selectedQ., selectedS., sizes: [...]}
                 */
            });        
    },
    checkIfInCart(userId, productId, size){        
         
        let checkCart = userId?
            fetch(`${users}/${userId}/cart?productId=${productId}`).then(response => response.json())
            //user is logged in: get [] or an array with a product object [ {...} ] from the cart
                : 
            this.getCartFromStorage(); 
            //get [] or an array with all products [{...}, {...}] from local storage

            return checkCart.then(productGroup => {
                //if the product is already in the cart and its size is the same as the current choice, return the product so that its number in cart can be increased
                if (productGroup.length > 0) {
                    return productGroup.find(product => product.selectedSize == size);
                } 
                return undefined;
            }
        ).catch(err => err);
    },
    increaseQuantity(product, quantity){  
        product.selectedQuantity = +product.selectedQuantity + +quantity;
        this.updateProductInCart(product);
    },
    //modify product.selectedQuantity in the cart after a different select option in the cartView is clicked
    //product.sizes is not modified!
    replaceQuantity(product, quantity) {
        product.selectedQuantity = quantity;
        return this.updateProductInCart(product);
    },
    //add a NEW product to the cart in local storage (not logged in) or to the 'database'
    addNewProduct(userId, product){
        if (userId === null){
            return this.getCartFromStorage() //[{...}, {...}]
                .then(cart => {
                    cart.push(product);
                    return this.updateCartInStorage(cart);
                })
                .catch(err => err);
        }

        fetch(`${users}/${userId}/cart`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)           
        }).then(
            response => response.json())
        .then(result => result)
        .catch(err => err);
    },
    //update the product in the cart (product.selectedQuantity) after 1 or more products of the same type have been added to the cart
    updateProductInCart(product){
        if (product.userId === undefined) {
            return this.getCartFromStorage()
                .then(cart => {         //cart: [{...}, {...}]
                    //in the local storage cart get the index of the product with the same product ID as the product being added now
                    let index = cart.findIndex(item => item.productId === product.productId);
                    //replace the old product with the updated one
                    cart[index] = product;
                    return this.updateCartInStorage(cart); //update cart in local storage
                })
                .catch(err => err);
        }

        return fetch(`${cart}/${product.id}`, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(response => response.json()
        );

    },
    //delete product from cart in local storage or on json-server
    deleteFromCart(product){
        if (product.userId === undefined) {
            return this.getCartFromStorage()
                .then(cart => {
                     //in the local storage cart get the index of the product with the same product ID as the product to be removed from the cart
                    let index = cart.findIndex(item => item.productId === product.productId);
                    cart.splice(index, 1);
                    this.updateCartInStorage(cart);
                })
                .catch(err => err);
        }
        
        return fetch(`${cart}/${product.id}`, {
            method: 'delete'
        }).catch( err => err);
    }
};

export default CartAPI;

/**
 * ----------------------------------------------------------------
 * How cart and stock work
 * ----------------------------------------------------------------
 * 
 * Adding products to the cart and removing them from the stock
 *   
 *   If the "add" btn in productView is pushed, call cartAPI.addToCart.
 * 
 *   1. If the product is not found in this cart, call cartAPI.addNewProduct and add a new product from the STOCK to the CART. 
 *   Its 'sizes' object contains the real max. available number of products. 
 *   So, if some of the items are already in other users' carts, the 'sizes' object will  be affected by it
 *   and select will have less options.
 * 
 *   2. If the product is found in this cart, call cartAPI.increaseQuantity and modify product.selectedQuantity in the CART. The rest of 
 *   the product's props in the cart stay the same: the 'sizes' object in the CART is not modified, so the number of available
 *   products displayed later in the cartView doesn't change, unless you log in, log out or change user.
 * 
 *   3. In both cases the number in the stock is reduced with the help of the userAPI (updateStock('remove', product)). 
 *   The productView select options are generated  based on the number in the stock.
 * 
 * ----------------------------------------------------------------
 *  
 *   Changing the number of products in the cart and updating the stock
 * 
 *   1. If an option is selected, first call cartAPI.replaceQuantity: product.selectedQuantity is modified and the modified
 *   product is stored in the CART. Its 'sizes' object isn't changed. So the range of select in cartView stays the same.
 * 
 *   2. Then call productAPI.updateStock('update', product) which updates the product quantity in STOCK modifying its 
 *   'sizes' object so that select in productView shows the correct number of items still available. 
 *   product.sizes[selectedSize] = Max. available number - selectedQuantity
 *   Max. available number is taken from the 'sizes' object in the CART.
 * 
 *   3. Basically, if you stay within the same cart (stay logged in as the same user or not logged in at all) the max. available
 *    number of p. in cart  will always stay the same in the cartView.
 * 
 * -----------------------------------------------------------------
 *   Deleting the product from cart und updating the stock
 * 
 *   1. If 'delete' in cartView is clicked, call cartAPI.deleteFromCart
 * 
 */