import React from 'react';
import propTypes from 'prop-types';
import Yokto from 'yokto';

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