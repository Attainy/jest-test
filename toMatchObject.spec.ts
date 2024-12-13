import { obj } from './toMatchObject';

test('객체 비교', () => {
  expect(obj()).toStrictEqual({});
});