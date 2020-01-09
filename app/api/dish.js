import instance from './instance';

const getDishesByCategory = categoryId =>
  instance.get(`products/${categoryId}/category`);

export default {
  getDishesByCategory,
};
