import { CategoryItem } from "../Category/category.types";
// The actions types of redux reducer for previnfing typing errors
export const enum CART_ACTIONS_TYPES {
  SET_CART_STATE = "SET_CART_STATE",
  UPDATE_CART_ITEMS = "UPDATE_CART_ITEMS",
}
export type CartItem = CategoryItem & {
  quantity: number;
};
