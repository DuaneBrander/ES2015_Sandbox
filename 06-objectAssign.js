'use strict';

let myObj = {
  a: '1',
  b: '2',
  c: '3',
  obj: {
    z: '26',
    y: '25'
  },
  arr: [1,2,3],
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

console.log('\n----- CLONED OBJ -----\n');


let myClonedObj = Object.assign({}, myObj);
myClonedObj.output();

// console.log('========== 2 - MODIFYING ARRAYS AND OBJECTS ===========');

// myObj.c = '9';
// myClonedObj.arr[1] = 99;
// myClonedObj.obj.y = 0;

// console.log('+++++++ MY OBJ +++++++++++++++')
// myObj.output();
// console.log('\n\n******* CLONE ****************')
// myClonedObj.output();

// console.log('========== 3 - MODIFYING FUNCTION ===========');

// myClonedObj.output = function () {
//   for (let key in this) {
//     if (key !== 'output') {
//       console.log("key = ", this[key]);
//     }
//   }
// }

// console.log('+++++++ MY OBJ +++++++++++++++')
// myObj.output();
// console.log('\n\n******* CLONE ****************')
// myClonedObj.output();

// console.log('========== Priorities (Left to Right) ===========');
// let a = {
//   a: 'a',
//   b: 'a',
//   c: 'a'
// };

// let b = {
//   b: 'b',
//   c: 'b'
// };

// let c = {
//   c: 'c'
// };

// let newObj = Object.assign({}, a, b, c);

// console.log('newObj = ', newObj);

// console.log('========== 4 - Mutation ===========');
// Object.assign(a, b, c);

// console.log('New mutation = ', a);


// console.log('======== USE CASE ===========');

// function myFunction (options) {
//   let defaults = {
//     isNew: false,
//     answer: 42,
//     widgets: []
//   }
//   let myOptions = Object.assign({}, defaults, options);
//   console.log('options = ', myOptions);
// }

// myFunction({isNew: true, widgets:['a', 'b']});