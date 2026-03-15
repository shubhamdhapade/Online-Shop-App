import { createContext, useState, useReducer } from "react";
import { dummyProducts } from "../assets/dummy-product";
import { showToasterMessage } from "../utilities/Toaster";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => { },
    updatedCartItemQuantity: () => { },
    clearCart: () => { }
});
function shoppingCartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        const updatedItems = [...state.items];
        const existingIndex = updatedItems.findIndex(item => item.id === action.payload.id);

        if (existingIndex > -1) {
            updatedItems[existingIndex] = {
                ...updatedItems[existingIndex],
                quantity: updatedItems[existingIndex].quantity + 1
            };
        } else {
            const product = dummyProducts.find(product => product.id === action.payload.id);
            updatedItems.push({
                id: action.payload.id,
                name: product.title,
                price: product.price,
                quantity: 1
            });
        }
        return { ...state, items: updatedItems };
    } else if (action.type === "UPDATE_ITEM_QUANTITY") {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(item => item.id === action.payload.id);
        if (updatedItemIndex === -1) return state;
        const updatedItem = { ...updatedItems[updatedItemIndex] };
        updatedItem.quantity += action.payload.amount;
        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }
        return { ...state,items: updatedItems };
    } else if (action.type === "CLEAR_CART") {
        return { ...state, items: [] };
    }
    return state;
}
export function CartContextProvider({ children }) {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, { items: [] });
    function addItemToCart(id) {
        const product = dummyProducts.find(p => p.id === id);
        if (!product) return;
        shoppingCartDispatch({
            type: "ADD_ITEM",
            payload: { id }
        });
        showToasterMessage(`Added ${product.title} to cart!`, "success");
    }
    function updatedCartItemQuantity(id, amount) {
        const itemToUpdate = shoppingCartState.items.find(item => item.id === id);
        if (itemToUpdate) {
            if (amount > 0) {
                showToasterMessage(`Added another ${itemToUpdate.name}!`, "success");
            } else if (itemToUpdate.quantity + amount <= 0) {
                showToasterMessage(`${itemToUpdate.name} removed from cart.`, "info");
            }
            shoppingCartDispatch({
                type: "UPDATE_ITEM_QUANTITY",
                payload: { id, amount }
            });
        }

    }
    function clearCart() {
        shoppingCartDispatch({
            type: "CLEAR_CART"
        });
    }
    const contextValue = {
        items: shoppingCartState.items,
        addItemToCart: addItemToCart,
        updatedCartItemQuantity: updatedCartItemQuantity,
        clearCart: clearCart
    }
    return <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>

}