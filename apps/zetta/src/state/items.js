import { withItemDone } from '../util/items';

const SET_STATE_ITEM_DONE = 'SET_STATE_ITEM_DONE';
const ADD_NEW_ITEM = 'ADD_NEW_ITEM';

export const setStateItemDone = (id, done) => ({
  type: SET_STATE_ITEM_DONE,
  id,
  done,
});

export const addNewItem = ({ id, title, done = false }) =>({
  type: ADD_NEW_ITEM,
  id,
  title,
  done,
});

export const reducer = (items = [], action) => {
  switch (action.type) {
    case SET_STATE_ITEM_DONE:
      return withItemDone(items, action.id, action.done);
    case ADD_NEW_ITEM:
      const { id, title, done } = action;
      return [...items, { id, title, done }];
    default:
      return items;
  }
};