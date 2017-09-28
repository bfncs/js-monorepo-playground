import React from 'react';
import renderer from 'react-test-renderer';
import Item from './Item';

const NO_OP = () => {};

describe('Item snapshot tests', () => {

  it('matches snapshot when done', () => {
    expect(renderer.create(
      <Item title={'title'} done={true} setDone={NO_OP}/>
    ).toJSON()).toMatchSnapshot();
  });

  it('matches snapshot when not done', () => {
    expect(renderer.create(
      <Item title={'title'} done={false} setDone={NO_OP}/>
    ).toJSON()).toMatchSnapshot();
  });

});