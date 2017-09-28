import shortId  from 'shortid';

export const createItem = (title, done = false) => ({
  id: shortId.generate(),
  title,
  done,
});

const getAndUpdateItem = (items = [], id, fn) =>
  items.map(item => item.id === id ? fn(item) : item);

export const setItemDone = (items = [], id, done) =>
  getAndUpdateItem(items, id, item => ({ ...item, done }));