import React, { useReducer } from 'react'
import {CartContext} from './cart-context'

const defaultCart = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        // const ids = state.items.filter(ite => ite.id === action.item.id).length;
        
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id); //this returns a boolean, if the id match, it resturns true otherwise false.....returns index
       
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
             };
             console.log(action.item.amount)
            updatedItems = [...state.items];
            // this stuff guy, gave me problem
            updatedItems[existingCartItemIndex] = updatedItem; 

        }else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems, 
            totalAmount: state.totalAmount + action.item.price * action.item.amount}
    }
    if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);

        const existingItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        if(existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        }else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCart;
}

const CarrProvider = prop => {
    const [cartState, cartStateDispatch] = useReducer(cartReducer, defaultCart);
    
    
    const addItemToCartHandler = item => {
        cartStateDispatch({type: 'ADD', item: item})
    };

    const removeItemFromCartHandler = id => {
        cartStateDispatch({type: 'REMOVE', id: id})
    };

      
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
  return (
    <CartContext.Provider value={cartContext}>
        {prop.children}
    </CartContext.Provider>
  )
}

export default CarrProvider