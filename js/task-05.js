"use strict";

class Car {
  static getSpecs(Car) {
    console.log(
      `Max Speed: ${Car.maxSpeed}, Car Speed: ${Car.speed}, Is ON: ${Car.isOn}, distance: ${Car.distance}, price: ${Car.price}`
    );
  }
  constructor(Car) {
    (this.speed = 0),
      (this.price = Car.price),
      (this.maxSpeed = Car.maxSpeed),
      (this.isOn = false),
      (this.distance = 0);
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  turnOn() {
    if (true) {
      this.isOn = true;
    }
  }

  turnOff() {
    if (true) {
      this.isOn = false;
      this.speed === 0;
    }
  }

  accelerate(value) {
    if (this.speed + value < this.maxSpeed) {
      this.speed = this.speed + value;
    }
  }

  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed = this.speed - value;
    }
  }

  drive(hours) {
    if (this.isOn === true) {
      this.distance = hours * this.speed;
    } else {
      this.distance = 0;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
// console.log(mustang);
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
