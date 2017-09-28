import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = ({ items, setItemDone }) => (
  <ul className={'list'}>
    {items.map(({ id, title, done }) => (
      <li key={id}>
        <Item title={title} done={done} setDone={nextDone => setItemDone(id, nextDone)} />
      </li>
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  })).isRequired,
  setItemDone: PropTypes.func.isRequired,
};

export default List;