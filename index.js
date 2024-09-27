// console.log(true); 
// console.log("Hello World!");
//  console.log(42);
// let myVar = "Hello World!"
//  console.log(typeof 42); 
//  console.log(typeof myVar);

// // let modulo = 19 % 6
// // let divide = 19 /6
// // console.log(modulo)
// // console.log(divide)

// // let newNumber = 14;
// //  newNumber = newNumber + 1;
// //  console.log(newNumber)

// //  let newNumber = 9; newNumber++; // newNumber is now equal to 10

// // console.log(“Hello” + “ World”); // outputs: Hello World 
// // console.log(“This is” + “ a String”); // outputs: This is a String 
// // console.log(“The number is ” + 5); // outputs: The number is 5 console.log(“Hello” - “ World”); // Invalid, cannot use -
// // const a = 5;
// //  const b = 10; 
// //  console.log(`'a' is assigned a value of "${a}," and 'b' is assigned a value of "${b}." Therefore, 'a' plus 'b' is equal to ${a + b}.`); // 'a' is assigned a value of "5," and 'b' is assigned a value of "10."
// //  // Therefore, 'a' plus 'b' is equal to 15.
// // The initial numbers that must be verified.
// const n1 = 9;
// const n2 = 15;
// const n3 = 21;
// const n4 = 5;

// // // Check one: add up to 50
// // // This is a fairly simple operation using
// // // arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;
// console.log(isSum50)

// // Check two: at least two odd numbers
// // Here, we use modulus to check if something is odd.
// // Since % 2 is 0 if even and 1 if odd, we can use
// // arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// // Check three: no number larger than 25
// // This time, we use the OR operator to check
// // if ANY of the numbers is larger than 25.
// // const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// // Check four: all unique numbers
// // This is long, and there are more efficient
// // ways of handling it with other data structures
// // that we will review later.
// // const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// // Here, we put the results into a single variable 
// // for convenience. Note how we negate isOver25 using
// // the ! operator. We could also have tested for 
// // // "isUnder25" as an alternative.
// // const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// // Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



//   const divisibleby5 = n1/ 5 || n2 / 5 || n3 / 5 || n4 / 5;
//   console.log(divisibleby5)


//----------- Activity one--------------
const n1 = 9;
const n2 = 15;
const n3 = 21;
const n4 = 5;



// this is to check if all numbers add up to 50
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50)

// Check if each number is divisible by 5
const ifdivisibleby5 = (n1 % 5 == 0) && (n2 % 5 == 0) && (n3 % 5 == 0) && (n4 % 5 == 0);
console.log(ifdivisibleby5)

// check if the first number is larger than the last number 
let iffirstlargerthanlast= n1 >n4;
console.log(iffirstlargerthanlast)

// Subtract the first number from the second number.
let subtraction = (n2-n1);
console.log(subtraction)

// Multiply the result by the third number.

let multiplication = subtraction * n3;
console.log(multiplication)

// Find the remainder of dividing the result by the fourth number.

let findRemainder = multiplication % n4;
console.log(findRemainder)


// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25
console.log(isOver25)
const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25
console.log(isUnder25)



// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
const totalmiles = 1500
const budget = 175
const ppgallon = 3
const a55mpg = 30
const b60mpg = 28
const c75mpg = 23
const a55mph = 55
const b60mph = 60
const c75mph = 70


// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
const a55fuelneeded = (totalmiles /a55mpg) 
const b60fuelneeded = (totalmiles/b60mpg) 
const c75fuelneeded = (totalmiles / c75mpg) 

console.log(`At 55mph, i need ${a55fuelneeded} gallons of fuel `)
console.log(`At 60mph, i need ${b60fuelneeded} gallons of fuel `)
console.log(`At 75mph, i need ${c75fuelneeded} gallons of fuel `)



// Will your budget be enough to cover the fuel expense?
const a55 = a55fuelneeded * ppgallon
const b60 = b60fuelneeded * ppgallon
const c75 = c75fuelneeded * ppgallon

let  a55fuelprice = budget > a55 
let  b60fuelprice = budget > b60 
let  c75fuelprice = budget > c75 

console.log( ` I will have enough to cover my expense ${a55fuelprice}`)
console.log( ` I will have enough to cover my expense ${b60fuelprice}`)
console.log( ` I will have enough to cover my expense ${c75fuelprice}`)
// How long will the trip take, in hours?
const a55triplength = totalmiles / a55mph
const b60triplength = totalmiles / b60mph
const c75triplength = totalmiles / c75mph

console.log( ` It will take me ${a55triplength} hrs if at 55mph`)
console.log( ` It will take me ${b60triplength}hrs if at 60mph`)
console.log( ` It will take me ${c75triplength}hrs if at 75mph`)



// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// Log the results of your calculations using string concatenation or template literals.