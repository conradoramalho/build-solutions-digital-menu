import instance from './instance';

const getHighlights = () => instance.get('highlights');

export default {
  getHighlights,
};
