import { CategoryItem } from "../Category/category.types";
import { CartItem, CART_ACTIONS_TYPES } from "./cart.types";
import {
  actionCreator,
  withMatcher,
  ActionWithPayload,
} from "../../Utils/Reducer/reducer.utils";

// ---------------------------- 3 Helper operations ----------------------------

// The function to add new items to the cart ++
const addCartItem = (
  cartItems: CartItem[],
  newItem: CategoryItem
): CartItem[] => {
  // Checking if the new item already exists in the cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === newItem.id
  );

  // What to do if it already exist
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // What to do if it doesn't exist
  return [...cartItems, { ...newItem, quantity: 1 }];
};

// The function to remove an item from the cart
const removeCartItem = (
  cartItems: CartItem[],
  removedItem: CartItem
): CartItem[] => {
  // Checking if the item already exists in the cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === removedItem.id
  );

  // If the item quantity equal 1
  if (existingCartItem && existingCartItem.quantity === 1)
    return cartItems.filter((item) => item.id !== removedItem.id);

  // What to do if it already exist
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === removedItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  return cartItems.map((cartItem) =>
    cartItem.id === removedItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// The function to remove an item from the cart
const clearCartItem = (
  cartItems: CartItem[],
  clearedItem: CartItem
): CartItem[] => {
  return cartItems.filter((item) => item.id !== clearedItem.id);
};

// ---------------------------- The Types for the 4 Actions ----------------------------
export type SetIsCartOpen = ActionWithPayload<
  CART_ACTIONS_TYPES.SET_CART_STATE,
  boolean
>;
export type UpdateCartItems = ActionWithPayload<
  CART_ACTIONS_TYPES.UPDATE_CART_ITEMS,
  CartItem[]
>;
// ---------------------------- 4 Funcs to Dispatch ----------------------------
// Check if the cart is open
export const setIsCartOpen = withMatcher((bool: boolean): SetIsCartOpen => {
  return actionCreator(CART_ACTIONS_TYPES.SET_CART_STATE, bool);
});

//
export const updateCartItems = withMatcher(
  (cartItems: CartItem[]): UpdateCartItems => {
    return actionCreator(CART_ACTIONS_TYPES.UPDATE_CART_ITEMS, cartItems);
  }
);

// Adding a New Item
export const addItemToCart = (cartItems: CartItem[], item: CategoryItem) => {
  return updateCartItems(addCartItem(cartItems, item));
};

// Removing an Item
export const removeItemFromCart = (cartItems: CartItem[], item: CartItem) => {
  return updateCartItems(removeCartItem(cartItems, item));
};

// Remove a complete item
export const clearItemFromCart = (cartItems: CartItem[], item: CartItem) => {
  return updateCartItems(clearCartItem(cartItems, item));
};
