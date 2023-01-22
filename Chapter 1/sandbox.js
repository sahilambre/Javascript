// alert('hello world');
// console.log(1);
// console.log(2);

let age = 22; 
/*
let is used to create variables
no spaces in variable
use camelcase while naming 
can contain numbers, letters or dollar sign
but cannot start with a number
cannot use the reserve keywords while naming variables */

let year = 2023;
console.log(age);
// console.log(year,age);

age = 23; //override age variable 
// console.log(age);

const points = 100;
// console.log(points);

// points = 101;
// console.log(points);


/* datatypes in javascript 
numbers, string, boolean, null, undefined, object, symbol */


// string
let email = 'sahilambre06@gmail.com';
console.log(email);

// string concatenation 
let firstName = 'Sahil';
let lastName = 'Ambre';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters 
 console.log(fullName[0]);

 // string length 
 console.log(fullName.length);

 // string methods 
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName); 

let index = email.indexOf('@');
console.log(index);

let endIndex = email.lastIndexOf('a');
console.log(endIndex);
let slicedResult = email.slice(0,5);
console.log(slicedResult);
let subStringResult = email.substring(1,5);
console.log(subStringResult);
let replaceResult = email.replace('s', 'a');
console.log(replaceResult);
