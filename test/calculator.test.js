import { it, expect } from 'vitest';
import { add, multiply, slowFibonacci } from '../src/calculator'

it('adds numbers', () => {
  expect(add(1, 2)).toBe(3);
});

it('multiplies numbers', () => {
  expect(multiply(3, 2)).toBe(6);
});

it('is slow for larger numbers', () => {
  // increase this number SLOWLY to create heavy load
  expect(slowFibonacci(25)).toBe(75025)
});
