'use strict';

function Polygon (height, width) {
  this.height = height;
  this.width = width;

  this.area = this.calcArea();
}

Polygon.prototype.calcArea = function () {
  return this.height * this.width;
};

Polygon.defineProperty(Polygon, "area", {
    get: function myProperty() {
        // code
    }
});

let poly = new Polygon(4,5);

console.log('calcArea = ' + poly.calcArea());
console.log('Area Prop = ' + poly.area);
