import instance from './instance';

const getMainCategories = () => instance.get('/categories');

const getSubCategories = ({ categoryId }) =>
  instance.get(`/categories/${categoryId}/children`);

export default {
  getMainCategories,
  getSubCategories,
};
