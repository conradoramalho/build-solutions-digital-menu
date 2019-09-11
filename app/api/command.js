import instance from './instance';

const getProductsByCategoryId = commandId =>
  instance.get(`/cards/${commandId}`);

export default {
  getProductsByCategoryId,
};
