import React from 'react';
import renderer from 'react-test-renderer';
import Yokto from './';

const NO_OP = () => {};

describe('react.input snapshot tests', () => {

  it('matches snapshot when done', () => {
    expect(renderer.create(
      <Yokto id={'someId'}>Some content</Yokto>
    ).toJSON()).toMatchSnapshot();
  });

});