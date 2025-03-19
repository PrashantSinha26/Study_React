import { Sum } from '../sum';

test('Sum of the two number', () => {
  const result = Sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
