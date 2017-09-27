import femto from './';

it('should prefix the string', () => {
  expect(femto('foo')).toBe('femto: foo');
  expect(femto('bar')).toBe('femto: bar');
});