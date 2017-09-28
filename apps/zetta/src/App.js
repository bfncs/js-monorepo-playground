import React from 'react';
import PropTypes from 'prop-types';
import { mapProps, withReducer, compose } from 'recompose';
import List from './List';
import Input from 'react/input';
import { createItem } from './util/items';
import { reducer as itemsReducer, addNewItem, setStateItemDone } from './state/items';

const INITIAL_ITEMS = ['foo', 'bar', 'baz'].map(title => createItem(title));

const App = ({
  items,
  addNewItem,
  setStateItemDone,
}) => (
  <div className="wrapper">
    <Input onEnter={addNewItem}/>
    <List items={items} setItemDone={setStateItemDone}/>
  </div>
);

App.propTypes = {
  items: PropTypes.array.isRequired,
  addNewItem: PropTypes.func.isRequired,
  setStateItemDone: PropTypes.func.isRequired,
};

const enhance = compose(
  withReducer('items', 'dispatch', itemsReducer, INITIAL_ITEMS),
  mapProps(({ dispatch, ...props }) => ({
      ...props,
      setStateItemDone: compose(dispatch, setStateItemDone),
      addNewItem: compose(dispatch, addNewItem, createItem),
  }))
);

export default enhance(App);
