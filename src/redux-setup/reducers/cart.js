import { ADD_TO_CART, DELETE_CART, UPDATE_CART } from "../../shared/constants/action-type";

const initState = {
    items: [],
}

const addToCart = (state, payload) => {
    const items = state.items;
    let isProductExist = false;
    items.map((item) => {
        if(item._id === payload._id){
            item.qty += payload.qty;
            isProductExist = true;
        }
        return item;
    })
    const newItems = isProductExist ? items : [...items, payload];
    localStorage.setItem("cart_items",JSON.stringify(newItems));
    return {...state, items : newItems}
}

const updateCart = (state, payload) => {
    const items = state.items;
    const { _id, qty } = payload;

    const newItems = items.map((item) => {
        if(item._id === _id){
            item.qty = qty;
        }
        return item;
    })

    return {...state, items: newItems}
}

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART: return addToCart(state, action.payload);
        case UPDATE_CART: return updateCart(state, action.payload);
        case DELETE_CART:
            const newItems = state.items.filter((item) => item._id !== action.payload._id); 
            return {...state, items: newItems}
        default: return state;
    }
}