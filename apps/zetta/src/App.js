import React, { Component } from 'react';
import shortId  from 'shortid';
import List from './List';
import Input from './Input';

const createItem = (title, done = false) => ({
  id: shortId.generate(),
  title,
  done,
});

const getAndUpdateItem = (items = [], id, fn) =>
  items.map(item => item.id === id ? fn(item) : item);

const setItemDone = (items = [], id, done) =>
  getAndUpdateItem(items, id, item => ({ ...item, done }));

class App extends Component {
  state = {
    items: ['foo', 'bar', 'baz'].map(title => createItem(title)),
  };

  setStateItemDone = (id, done) =>
    this.setState({ items: setItemDone(this.state.items, id, done) });

  addNewItem = title =>
    this.setState({ items: [ ...this.state.items, createItem(title) ] });

  render() {
    const { state: { items = [] } = {} } = this;
    return (
      <div className="wrapper">
        <Input onEnter={this.addNewItem} />
        <List items={items} setItemDone={this.setStateItemDone} />
      </div>
    );
  }
}

export default App;
