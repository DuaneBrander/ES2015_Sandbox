'use strict';

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // properly refers to the person object
  }, 1000);
}

let sam = new Person();

setTimeout(function(){
  console.log(`Sam is ${sam.age} years old`);
}, 3000);
