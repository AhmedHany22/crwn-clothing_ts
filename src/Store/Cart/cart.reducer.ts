import { AnyAction } from "redux";
import { setIsCartOpen, updateCartItems } from "./cart.action";
import { CartItem } from "./cart.types";

// The initial State object
export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};
const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

// ____________________ Cart Reducer ____________________
// Func that handle the actions to change the state
export const cartReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return { ...state, isCartOpen: action.payload };
  }
  if (updateCartItems.match(action)) {
    return { ...state, cartItems: action.payload };
  }
  return state;
};

// __________ The Cart_Reducer before Typescript __________
// export const cartReducer = (state = INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTIONS_TYPES.SET_CART_STATE:
//       return { ...state, isCartOpen: payload };

//     case CART_ACTIONS_TYPES.UPDATE_CART_ITEMS:
//       return { ...state, cartItems: payload };

//     default:
//       return state;
//   }
// };
