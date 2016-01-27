'use strict';

class Cat { 
  constructor(name) {
    this.name = name;
    this.type = this.constructor.name;
  }
  speak() {
    console.log(`${this.name} the ${this.type} makes a noise.`);
  }
}
class Lion extends Cat {
  speak() {
    super.speak();
  }
}

let myCat = new Cat('Mittens');
let myLion = new Lion('Cecil');

myCat.speak();
myLion.speak();
