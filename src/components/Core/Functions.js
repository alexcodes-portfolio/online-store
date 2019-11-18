//generate options for quantity select
export const getAvailableQuantity = (sizes, selectedSize) => {

        //get an object {size: ..., quantity: ...} containing the selected size and its available quantity
        const currentSizeObject = sizes.find(item => item.size == selectedSize);

        //undefined when the currentSizeObject has not been loaded yet or there are no more items of this size in the cart
        const avaliableQuantity = currentSizeObject !== undefined? currentSizeObject.quantity : 0;        
        
        return Array(avaliableQuantity).fill(0).map( (item, index) => index + 1); //[1, 2, 3,...]
};

/**
 * sizes[selectedSize].quantity:
 * --------------------------------
 * 
 * productView select: 
 * max. available number of products =  the initial total number of products in stock - products in this cart - products in other carts
 * 
 * cartView select: 
 * max. available number of products = the initial total number of products in stock - products in other carts
 */

export function handle404(response){
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}

export function createClass(className, addedClass) {
    return addedClass? className + addedClass : className;
}
