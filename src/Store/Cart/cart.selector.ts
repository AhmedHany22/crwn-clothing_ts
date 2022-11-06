// It's a func that perform memoaization technique
import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";

// Gitting the state of the Cart Reducer throw Redux system
const selectCartReducerState = (state): CartState => state.cart;

// createSelector first param is the input for the last param
// There can be multible params, if 5 then 4 are inputs for the last which must be func
// The last param the func will only run if any of the first params changed
export const cartStateSelector = createSelector(
  selectCartReducerState,
  (cart) => cart.isCartOpen
);

export const cartItemsSelector = createSelector(
  selectCartReducerState,
  (cart) => cart.cartItems
);

export const cartCountSelector = createSelector(
  cartItemsSelector,
  (cartItemsSelector) =>
    cartItemsSelector.reduce((itemsCount, item) => {
      return itemsCount + item.quantity;
    }, 0)
);

export const cartTotalSelector = createSelector(
  cartItemsSelector,
  (cartItemsSelector) =>
    cartItemsSelector.reduce((itemsCount, item) => {
      return itemsCount + item.quantity * item.price;
    }, 0)
);
