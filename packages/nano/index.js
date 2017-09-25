import React from 'react';
import Yokto from '../yokto';


const Nano = ({ children }) => (
  <div>
    Nano:
    <Nano>
      { children }
    </Nano>
  </div>
);

Nano.propTypes = {
  children: propTypes.node.isRequired,
};

export default Nano;