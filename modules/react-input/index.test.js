import React from 'react';
import renderer from 'react-test-renderer';
import Input from './index';

const NO_OP = () => {};

describe('react-input snapshot tests', () => {

  it('matches snapshot when done', () => {
    expect(renderer.create(
      <Input onEnter={NO_OP}/>
    ).toJSON()).toMatchSnapshot();
  });

});