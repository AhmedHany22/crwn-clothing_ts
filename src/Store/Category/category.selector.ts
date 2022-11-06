// It's a func that perform memoaization technique
import { createSelector } from "reselect";
import { CategoryMap } from "./category.types";
import { CategoriesState } from "./category.reducer";

const selectCategoryReducerState = (state): CategoriesState => state.category;

// createSelector first param is the input for the last param
// There can be multible params, if 5 then 4 are inputs for the last which must be func
// The last param the func will only run if any of the first params changed
const selectCategory = createSelector(
  selectCategoryReducerState,
  (categorySlice) => categorySlice.categories
);

export const categorySelector = createSelector(
  selectCategory,
  (categorySliceMap): CategoryMap =>
    categorySliceMap.reduce((accumlator, category) => {
      const { title, items } = category;
      accumlator[title.toLowerCase()] = items;
      return accumlator;
    }, {} as CategoryMap)
);

export const categoryIsLoadingSelector = createSelector(
  selectCategoryReducerState,
  (categorySlice) => categorySlice.isLoading
);
