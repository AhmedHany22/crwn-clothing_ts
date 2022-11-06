import { AnyAction } from "redux";

import { Category } from "./category.types";
import {
  fetchCategoriesStart,
  fetchCategoriesSucces,
  fetchCategoriesFailed,
} from "./category.action";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: null | Error;
};

// The initial State object
const INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

// ------------------------------ User Reducer ------------------------------
// Func that handle the actions to change the state
export const categoriesReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
) => {
  // The 3 states of calling the API
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (fetchCategoriesSucces.match(action)) {
    return { ...state, isLoading: false, categories: action.payload };
  }
  if (fetchCategoriesFailed.match(action)) {
    return { ...state, isLoading: false, error: action.payload };
  }
  // We return the state in the defalt case, because the action is passed to all reducers
  return state;

  // __________ The Swithcase method without the matcher func __________
  // export const categoriesReducer = (
  //   state = INITIAL_STATE,
  //   action = {} as CategoryActions
  // ) => {
  //   switch (action.type) {
  //     // The 3 states of calling the API
  //     case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_START:
  //       return { ...state, isLoading: true };
  //     case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_SUCCESS:
  //       return { ...state, isLoading: false, categories: action.payload };
  //     case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_FAILED:
  //       return { ...state, isLoading: false, error: action.payload };
  //     // We return the state in the defalt case, because the action is passed to all reducers
  //     default:
  //       return state;
  //   }
  // };
};
