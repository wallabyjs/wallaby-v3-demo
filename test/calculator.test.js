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
  // values larger than 40 will be rejected, as they will result in very
  // lengthy execution times (Vitest's 5000ms timeout only applies to async code;
  // it will not interrupt a hot test like this)
  expect(slowFibonacci(25)).toBe(75025)
});
