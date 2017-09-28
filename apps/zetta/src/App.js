import React, { Component } from 'react';
import List from './List';
import Input from 'react/input';
import { createItem, setItemDone} from './util/items';

class App extends Component {
  state = {
    items: ['foo', 'bar', 'baz'].map(title => createItem(title)),
  };

  updateItems = items => {
    console.log(items);
    this.setState({ items });
  };

  setStateItemDone = (id, done) =>
    this.updateItems(setItemDone(this.state.items, id, done));

  addNewItem = title =>
    this.updateItems([...this.state.items, createItem(title)]);

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
