import instance from './instance';

const getProductsByCategoryId = categoryId =>
  instance.get(`/products/${categoryId}/category`);

export default {
  getProductsByCategoryId,
};
