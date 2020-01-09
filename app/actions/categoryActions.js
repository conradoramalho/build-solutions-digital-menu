export const MAIN_CATEGORIES_FETCH = 'MAIN_CATEGORIES_FETCH';
export const MAIN_CATEGORIES_SUCCESS = 'MAIN_CATEGORIES_SUCCESS';
export const MAIN_CATEGORIES_ERROR = 'MAIN_CATEGORIES_ERROR';

export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';

export const getMainCategories = () => ({
  type: MAIN_CATEGORIES_FETCH,
  payload: undefined,
});

export const setCurrentCategory = categoryId => ({
  type: SET_CURRENT_CATEGORY,
  payload: categoryId,
});
