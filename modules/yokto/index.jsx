import React from 'react';
import propTypes from 'prop-types';

const Yokto = ({ children }) => (
  <div>
    Yokto: {children}
  </div>
);

Yokto.propTypes = {
  children: propTypes.node.isRequired,
};

export default Yokto