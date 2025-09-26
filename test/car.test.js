import { describe, it, expect, beforeEach } from 'vitest';
import { Car } from '../src/car';
import { helloWorld } from '../src/common';

let car;

describe('car', () => {
  beforeEach(() => {
    car = new Car(88);
  });

  it('has correct engine', () => {
    console.log(helloWorld());
    expect(car.engine).toBe('2.85 L');
  });

  it('accelerates', () => {
    car.accelerate();
    expect(car).toMatchSnapshot();
  });

  it('brakes', () => {
    car.brake();
    expect(car.speed).toBe(87);
  });
});
