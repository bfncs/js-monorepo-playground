import { reducer, setStateItemDone, addNewItem } from './items';

const ID = Symbol('id');
const DONE = Symbol('done');
const NEW_ID = Symbol('new id');
const NEW_TITLE = Symbol('new title');
const NEW_DONE = Symbol('new done');

describe('todo items action creator tests', () => {

  it('should create the SET_STATE_ITEM_DONE action', () => {
    const action = setStateItemDone(ID, DONE);

    expect(action).toEqual({
      type: 'SET_STATE_ITEM_DONE',
      id: ID,
      done: DONE,
    })
  });

  it('should create the ADD_NEW_ITEM action', () => {
    const action = addNewItem({ id: NEW_ID, title: NEW_TITLE, done: NEW_DONE });

    expect(action).toEqual({
      type: 'ADD_NEW_ITEM',
      id: NEW_ID,
      title: NEW_TITLE,
      done: NEW_DONE,
    })
  });

});

describe('todo items reducer tests', () => {

  const FOO_ID = Symbol('foo id');
  const FOO_TITLE = Symbol('foo title');
  const BAR_ID = Symbol('bar id');
  const BAR_TITLE = Symbol('bar title');
  const LAST_STATE = [
    {
      id: FOO_ID,
      title: FOO_TITLE,
      done: true,
    },
    {
      id: BAR_ID,
      title: BAR_TITLE,
      done: false,
    },
  ];

  it('should process the SET_STATE_ITEM_DONE action', () => {
    const action = {
      type: 'SET_STATE_ITEM_DONE',
      id: BAR_ID,
      done: true,
    };

    const nextState = reducer(LAST_STATE, action);

    expect(nextState).toEqual([
      {
        id: FOO_ID,
        title: FOO_TITLE,
        done: true,
      },
      {
        id: BAR_ID,
        title: BAR_TITLE,
        done: true,
      },
    ])
  });

  it('should process the ADD_NEW_ITEM action', () => {
    const action = {
      type: 'ADD_NEW_ITEM',
      id: NEW_ID,
      title: NEW_TITLE,
      done: NEW_DONE,
    };

    const nextState = reducer(LAST_STATE, action);

    expect(nextState).toEqual([
      {
        id: FOO_ID,
        title: FOO_TITLE,
        done: true,
      },
      {
        id: BAR_ID,
        title: BAR_TITLE,
        done: false,
      },
      {
        id: NEW_ID,
        title: NEW_TITLE,
        done: NEW_DONE,
      },
    ])
  });

  it('should not change state for unknown action', () => {
    const nextState = reducer(LAST_STATE, { type: Symbol('unknown action') });

    expect(nextState).toEqual(LAST_STATE)
  });

});