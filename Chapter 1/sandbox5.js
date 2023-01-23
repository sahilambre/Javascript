let age = 25;

// loose comparisons (different types can still be equal) -> ==

console.log(age == 25);
console.log(age == '25');


// strict comparisons/ equeality (different types cannot be equal) -> ===

console.log(age === 25); // true
console.log(age === '25'); // false 
console.log(age !== 25);    // false 
console.log(age !== '25');  // true 


// TYPE CONVERSIONS 

let score = '100';

//console.log(score + 1); // gives 1001 

score = Number(score)
console.log(score + 1)
console.log(typeof(score))


// let result = Number('hello');
// let result = String(50);



// console.log(result, typeof(result));

// let result = Boolean(0)
// let result = Boolean(1)
// let result = Boolean(2)
// let result = Boolean(-2)
// let result = Boolean('') // false 

let result = Boolean('0') // true : strings on any length are true 


console.log(result, typeof(result))

