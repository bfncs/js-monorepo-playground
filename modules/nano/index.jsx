import React from 'react';
import Yokto from '../yokto/index';

const Nano = ({ children }) => (
  <div>
    Nano:
    <Yokto>
      { children }
    </Yokto>
  </div>
);

Nano.propTypes = {
  children: propTypes.node.isRequired,
};

export default Nano;