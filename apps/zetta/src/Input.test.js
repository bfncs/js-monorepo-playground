import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

const NO_OP = () => {};

describe('Input snapshot tests', () => {

  it('matches snapshot when done', () => {
    expect(renderer.create(
      <Input onEnter={NO_OP}/>
    ).toJSON()).toMatchSnapshot();
  });

});