'use strict';

let myJSON = '{"success": "Success"}';
let myBadJSON = '{success: true;}';

// CALLBACK

function cb(error, result) {
  if (error) {
    return console.log("In Error = ", error)
  }
  console.log("After Error Check ", result);
}

setTimeout(() => {
  let response = null;
  try {
    response = JSON.parse(myJSON);
  } catch (e) {
    return cb(e);
  }

  return cb(null, response);
}, 1000);


// let myPromise = new Promise(
//   function(resolve, reject) {
//     setTimeout(() => {

//       let response = null;
//       console.log('Firing Callback');
//       try {
//         response = JSON.parse(myJSON);
//       } catch (e) {
//         return reject(e);
//       }

//       return resolve(response.success);
//     }, 1000);
//   }
// );


// myPromise
//   .then((reason) => { console.log("In Then = ", reason)})
//   .catch((reason) => { console.log("In Catch = ", reason)});


// DOUBLE Trouble

// let myPromise = new Promise(
//   function(resolve, reject) {
//     setTimeout(() => {

//       let response = null;
//       console.log('Firing Callback');
//       try {
//         response = JSON.parse(myJSON);
//       } catch (e) {
//         return reject(e);
//       }

//       return resolve(response.success);
//     }, 1000);
//   }
// );


// myPromise
//   .then((reason) => { 
//     return new Promise(
//       function (resolve, reject) {
//         setTimeout(() => {
//           console.log('MORE Async!');
//           return resolve();
//         }, 1000);
//       }
//     );
//   })
//   .then((reason) => { 
//     console.log('In 2nd Then')
//   })
//   .catch((reason) => { console.log("In Catch = ", reason)})
