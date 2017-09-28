import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';
import { createItem } from './util/items';

const NO_OP = () => {};
const ITEMS = ['foo', 'bar', 'baz'].map((title, count) => createItem(title, count % 2 === 0));

describe('List snapshot tests', () => {

  it('matches snapshot when empty', () => {
    expect(renderer.create(
      <List items={[]} setItemDone={NO_OP}/>
    ).toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with items', () => {
    expect(renderer.create(
      <List items={ITEMS} setItemDone={NO_OP}/>
    ).toJSON()).toMatchSnapshot();
  });

});