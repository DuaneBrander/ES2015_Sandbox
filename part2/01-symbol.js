'use strict';

console.log(' --- ARRAY LOOPING --- ');

let myArr = [1,2,3];

for (let value of myArr) {
  console.log(`value = ${value}`);
}

console.log('\n\n --- STRING LOOPING --- ');

let myStr = 'the lazy brown dog';
for (let char of myStr) {
  console.log(`char = ${char}`);
}

console.log('\n\n --- OBJECT LOOPING --- ');

let myObj = {
  first: '1st',
  second: '2nd',
  last: '3rd'
}

myObj[Symbol.iterator] = function * () {
  yield 'second';
  yield 'last';
  yield 'first';
};

for (let key of myObj) {
  console.log(`key = ${key} -- ${myObj[key]}`);
}

// console.log('\n\n --- MAPS LOOPING --- ');

// let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

// for (let entry of iterable) {
//   console.log(`${entry[0]} == ${entry[1]}`);
// }
