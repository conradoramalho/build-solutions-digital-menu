import instance from './instance';

const getCategories = () => instance.get('/categories');

export default {
  getCategories,
};
