import {sum} from "./sum";

describe('First test', () => {
  test('Sum 1 and 2', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('Incorrect sum of values', () => {
    expect(sum(1, 2)).not.toBe(2);
  });
  test('Incorrect sum of values', () => {
    expect(sum(2, 2)).toBe(4);
  })
})