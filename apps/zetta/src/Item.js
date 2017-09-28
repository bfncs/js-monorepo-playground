import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ title, done, setDone }) => (
  <div>
    <input type="checkbox" onClick={() => setDone(!done)} />
    <span>{ title }</span>
  </div>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  setDone: PropTypes.func.isRequired,
};

export default Item;