import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 4, b: 2, action: Action.Subtract, expected: 2 },
    { a: 4, b: 8, action: Action.Multiply, expected: 32 },
    { a: 12, b: 2, action: Action.Divide, expected: 6 },
    { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
    { a: 3, b: 4, action: 'invalid', expected: null },
    { a: 3, b: false, action: Action.Exponentiate, expected: null }
];

describe('simpleCalculator', () => {
  test.each(testCases)('should return $expected when $a $action $b', ({ a, b, action, expected }) => {
    expect(simpleCalculator({ a, b, action })).toBe(expected);
  });
});
