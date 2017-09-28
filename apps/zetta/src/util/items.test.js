import { createItem, withItemDone } from './items';

describe('create item', () => {

  it('should create item', () => {
    const NEW_TITLE = Symbol('new title');
    const item = createItem(NEW_TITLE);

    expect(item).toEqual(expect.objectContaining({
      title: NEW_TITLE,
      done: false,
    }));
    expect(item.id).toMatch(/[a-zA-Z0-9_-]{7,}/);
  });

  it('should create done item', () => {
    const NEW_TITLE = Symbol('new title');
    const item = createItem(NEW_TITLE, true);

    expect(item).toEqual(expect.objectContaining({
      title: NEW_TITLE,
      done: true,
    }));
    expect(item.id).toMatch(/[a-zA-Z0-9_-]{7,}/);
  });

});

describe('set done', () => {

  const FOO_ID = Symbol('foo id');
  const FOO_TITLE = Symbol('foo title');
  const BAR_ID = Symbol('bar id');
  const BAR_TITLE = Symbol('bar title');
  const ITEMS = [
    {
      id: FOO_ID,
      title: FOO_TITLE,
      done: false,
    },
    {
      id: BAR_ID,
      title: BAR_TITLE,
      done: true,
    }
  ];

  it('should set item done to true', () => {
    const items = withItemDone(ITEMS, FOO_ID, true);

    expect(items).toEqual([
      {
        id: FOO_ID,
        title: FOO_TITLE,
        done: true,
      },
      {
        id: BAR_ID,
        title: BAR_TITLE,
        done: true,
      }
    ]);
  });

  it('should set item done to false', () => {
    const items = withItemDone(ITEMS, BAR_ID, false);

    expect(items).toEqual([
      {
        id: FOO_ID,
        title: FOO_TITLE,
        done: false,
      },
      {
        id: BAR_ID,
        title: BAR_TITLE,
        done: false,
      }
    ]);
  });

  it('should not change items if id does not match', () => {
    const items = withItemDone(ITEMS, Symbol('unknown id'), true);

    expect(items).toEqual([
      {
        id: FOO_ID,
        title: FOO_TITLE,
        done: false,
      },
      {
        id: BAR_ID,
        title: BAR_TITLE,
        done: true,
      }
    ]);
  });

});