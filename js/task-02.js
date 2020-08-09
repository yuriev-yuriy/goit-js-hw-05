"use strict";

class User {
  constructor(User) {
    this.name = User.name;
    this.age = User.age;
    this.followers = User.followers;
  }
  getInfo() {
    const keys = Object.keys(this);
    for (const key of keys) {
      console.log(key);
    }
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}
const mango = new User("Mango", 2, 20);

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers
