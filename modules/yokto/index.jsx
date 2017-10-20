import React from 'react';
import propTypes from 'prop-types';
import uuid from 'shortid';

const Yokto = ({ children, id }) => (
  <div>
    Yokto: {children}
    <br/>
    id: {id}
  </div>
);

Yokto.propTypes = {
  children: propTypes.node.isRequired,
  id: propTypes.string,
};

Yokto.defaultProps = {
  id: uuid(),
};

export default Yokto