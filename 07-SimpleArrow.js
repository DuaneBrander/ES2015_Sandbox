let square = (x) => {
  return x * x;
}
console.log('==== Square ====');
console.log(square(2)); // = 4


let multiply = (a, b) => {
  return a * b
}
console.log('\n\n==== multiply ====');
console.log(multiply(3, 4));


// var a = [
//   "Hydrogen",
//   "Helium",
//   "Lithium",
//   "Beryl­lium"
// ];
// // ES5 Style
// var a2 = a.map(function(s){ return s.length });

// console.log(a2)

// // ES2015 Style
// // When only 1 statement is supplied that statement’s // result is returned
// let a3 = a.map( (s) => s.length );

// console.log('\n\n===== ARROW =====');
// console.log(a3);

// let a4 = a.map( s => s.length );

// console.log('\n\n===== SAME =====');
// console.log(a4);