// The actions types of redux reducer for previnfing typing errors
export const enum CATEGORIES_ACTIONS_TYPES {
  SET_CATEGORIES_START = "SET_CATEGORIES_START",
  SET_CATEGORIES_SUCCESS = "SET_CATEGORIES_SUCCESS",
  SET_CATEGORIES_FAILED = "SET_CATEGORIES_FAILED",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};
