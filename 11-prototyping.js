'use strict';

function Polygon (height, width) {
  this.height = height;
  this.width = width;

  this.area = this.calcArea();
}

Polygon.prototype.calcArea = function () {
  return this.height * this.width;
};

let poly = new Polygon(4,5);

console.log('calcArea = ' + poly.calcArea());
console.log('Area Prop = ' + poly.area);


// Inheritence

// function Square (width) {
//   // Call the Parent's Constructor
//   Polygon.call(this, width, width);
// }

// // Copy over all of the Prototyped values
// Square.prototype = Object.create(Polygon.prototype);
// let sq = new Square(3);

// console.log('Square Area = ' + sq.calcArea());
// console.log('Square Area Prop = ' + sq.area);

// console.log('============ IS A? ================');
// console.log('Is Square an instance of Poly? ', (sq instanceof Polygon))
// console.log('Is Poly an instance of Square? ', (poly instanceof Square))
// console.log('Is Square an instance of Object? ', (sq instanceof Object))