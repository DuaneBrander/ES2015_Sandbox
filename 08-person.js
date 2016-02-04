'use strict';

function Person() {
  this.age = 0;

  setInterval(function growUp() {
    this.age++;
  }, 1000);
}

let sam = new Person();

setTimeout(function(){
  console.log(`Sam is ${sam.age} years old`);
}, 3000);