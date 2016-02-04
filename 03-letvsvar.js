'use strict'

function fun () {
  var a = 1; //Functional Scope
  var b = 2; 

  if (a && b) {
    let c = Math.pow(a, 2) + Math.pow(b, 2); // Block Scope
    console.log(getSquareRoot(c));
  }
}


function fun2 () {
  let a = 1; //Block Scope -- Effectively Function scoped
  let b = 2;

  if (a && b) {
    let c = Math.pow(a, 2) + Math.pow(b, 2); // Still Block Scope
    console.log(getSquareRoot(c));
  }
}

function unfun () {
  var a = 1; //Function Scope
  var b = 2;

  if (a && b) {
    var c = Math.pow(a, 2) + Math.pow(b, 2); // Uh oh, function scoped
  }

  // relies on Hoisting to make c available here

  console.log(getSquareRoot(c));
}


fun();
fun2();
unfun();


function getSquareRoot(num) {
  return Math.sqrt(num);
}