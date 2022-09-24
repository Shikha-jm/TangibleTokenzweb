// for add item to cart
export const addcart = (product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

// for delete item from cart
export const delcart = (product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}

// for delete item from cart
export const increament = (product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}
// for delete item from cart
export const decreament = (product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}