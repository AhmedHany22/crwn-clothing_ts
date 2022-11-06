import { CATEGORIES_ACTIONS_TYPES, Category } from "./category.types";
import {
  actionCreator,
  ActionWithPayload,
  Action,
  withMatcher,
} from "../../Utils/Reducer/reducer.utils";

// __________ The 3 Types of the following functions __________
export type FetchCategoriesStart =
  Action<CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_START>;

export type FetchCategoriesSucces = ActionWithPayload<
  CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_FAILED,
  Error
>;

// __________ Works with the reducer switch case func __________
// export type CategoryActions =
//   | FetchCategoriesStart
//   | FetchCategoriesSucces
//   | FetchCategoriesFailed;

// __________ The 3 functions states of calling the API functions that will handle the dispatch __________
export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => {
  return actionCreator(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_START);
});
export const fetchCategoriesSucces = withMatcher(
  (categories: Category[]): FetchCategoriesSucces => {
    return actionCreator(
      CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_SUCCESS,
      categories
    );
  }
);
export const fetchCategoriesFailed = withMatcher((error: Error) => {
  return actionCreator(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_FAILED, error);
});
