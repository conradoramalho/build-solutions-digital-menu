export const DISHES_FETCH = 'DISHES_FETCH';
export const DISHES_SUCCESS = 'DISHES_SUCCESS';
export const DISHES_ERROR = 'DISHES_ERROR';

export const getDishesByCategory = categoryId => ({
  type: DISHES_FETCH,
  payload: categoryId,
});
