import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const input = {
      a: 5,
      b: 6,
      action: Action.Add
    };
    const result = simpleCalculator(input);
    expect(result).toBe(11);
  });

  test('should subtract two numbers', () => {
    const input = {
      a: 7,
      b: 4,
      action: Action.Subtract
    };
    const result = simpleCalculator(input);
    expect(result).toBe(3);
  });

  test('should multiply two numbers', () => {
    const input = {
      a: 9,
      b: 3,
      action: Action.Multiply
    };
    const result = simpleCalculator(input);
    expect(result).toBe(27);
  });

  test('should divide two numbers', () => {
    const input = {
      a: 8,
      b: 4,
      action: Action.Divide
    }
    const result = simpleCalculator(input);
    expect(result).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    const input = {
      a: 3,
      b: 3,
      action: Action.Exponentiate
    };
    const result = simpleCalculator(input);
    expect(result).toBe(27);
  });

  test('should return null for invalid action', () => {
    const input = { 
      a: 5, 
      b: 2, 
      action: '' 
    };
    const result = simpleCalculator(input);
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: 4, b: 'string', action: Action.Add })).toBeNull();
    expect(simpleCalculator({ a: false, b: 1, action: Action.Subtract })).toBeNull();
    expect(simpleCalculator({ a: 5, b: null, action: Action.Multiply })).toBeNull();
    expect(simpleCalculator({ a: 6, b: [1, 2], action: Action.Divide })).toBeNull();
    expect(simpleCalculator({ a: {a: 4, b: 3}, b: 2, action: Action.Exponentiate })).toBeNull();
  });
});
