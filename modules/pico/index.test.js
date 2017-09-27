import pico from './';

it('should prefix the string', () => {
  expect(pico('foo')).toBe('pico(femto: foo)');
  expect(pico('bar')).toBe('pico(femto: bar)');
});