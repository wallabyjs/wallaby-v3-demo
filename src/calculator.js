export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function slowFibonacci(n) {
  if (n > 40) {
    throw new Error('too ambitious; please provide a number <= 40');
  }
  return (n <= 1) ? n : slowFibonacci(n - 1) + slowFibonacci(n - 2);
}