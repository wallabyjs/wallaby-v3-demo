export class Car {
  constructor(initialSpeed) {
    this.engine = '2.85 L';
    this.power = '97 kW';
    this.speed = initialSpeed;
  }

  accelerate() {
    this.speed++;
  }

  brake() {
    // fix this reference to get rid of the associated failure(s)
    speed--;
  }
}
