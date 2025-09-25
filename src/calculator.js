export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// this naive implementation of Fibonacci sequence calculation will degrade
// very quickly, but can be used to simulate a non-async, performance-intensive
// test
export function slowFibonacci(n) {
  if (n > 40) {
    throw new Error('too ambitious; please provide a number <= 40');
  }
  return (n <= 1) ? n : slowFibonacci(n - 1) + slowFibonacci(n - 2);
}