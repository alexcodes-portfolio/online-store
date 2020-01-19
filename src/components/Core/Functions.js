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

export function supportsWebp(feature, callback) {
    var kTestImages = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    };
    let img = new Image();
    img.onload = function () {
        var result = (img.width > 0) && (img.height > 0);
        callback(feature, result);
    };
    img.onerror = function () {
        callback(feature, false);
    };
    img.src = "data:image/webp;base64," + kTestImages[feature];
}