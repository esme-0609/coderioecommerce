import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_ALL_FROM_CART,
    REMOVE_ONE_FROM_CART,
  } from "../types";
  
  export const initialState = {
    cart: [],
  };
  
  export function shoppingReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART: {
  
        let itemInCart = state.cart.find((item) => item.id === action.payload.id);
  
        return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        :{
              ...state,
              cart: [...state.cart, { ...action.payload, quantity: 1 }],
            };
      }
      case REMOVE_ONE_FROM_CART: {
        let itemToDelete = state.cart.find((item) => item.id === action.payload);
  
        return itemToDelete.quantity > 1
          ? {
              ...state,
              cart: state.cart.map((item) =>
                item.id === action.payload
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            }
          : {
              ...state,
              cart: state.cart.filter((item) => item.id !== action.payload),
            };
      }
      case REMOVE_ALL_FROM_CART: {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      }
      case CLEAR_CART:
        return initialState;
      default:
        return state;
    }
  }
  