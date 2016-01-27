'use strict';

let myObj = {
  a: '1',
  b: '2',
  c: '3',
  d: {
    z: '26',
    y: '25'
  },
  ar: [1,2,3],
  date: new Date(),
  output: function() {
    for (let key in this) {
      if (key !== 'output') {
        console.log(this[key]);
      }
    }
  }
}

myObj.output();

console.log('----------')


let myClonedObj = Object.assign({}, myObj);
myClonedObj.output();

console.log('========== MODIFYING ARRAYS AND OBJECTS ===========');

myObj.c = '9';
myClonedObj.ar[1] = 99;
myClonedObj.d.y = 0;

console.log('+++++++ MY OBJ +++++++++++++++')
myObj.output();
console.log('----------')
console.log('******* CLONE ****************')
myClonedObj.output();

myClonedObj.output = function () {
  for (let key in this) {
    if (key !== 'output') {
      console.log("key = ", this[key]);
    }
  }
}

console.log('\n\n\n\n')
console.log('+++++++ MY OBJ +++++++++++++++')
myObj.output();
console.log('----------')
console.log('******* CLONE ****************')
myClonedObj.output();

