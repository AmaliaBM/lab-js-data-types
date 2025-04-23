/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5;

// Print out the concatenated string
console.log(tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let camelTail = part1.charAt(0).toUpperCase() + part1.slice(1) + part2.charAt(0).toUpperCase() + part2.slice(1);


// Print the cameLtaiL-formatted string
console.log(camelTail);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipPercentage = 0.15;
const tipAmount = billTotal * tipPercentage;



// Print out the tipAmount
console.log(`The tip amount is: $${tipAmount.toFixed(2)}`);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const min = 1;
const max = 10; 

// Print the generated random number
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`The random number is: ${randomNumber}`);



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false
// false because both a and b are not true

const expression2 = a || b; // true
// true because at least one of a or b is true

const expression3 = !a && b; // false
// false because a is true and b is false

const expression4 = !(a && b);  // true
// true because a and b are not both true

const expression5 = !a || !b; // true
// true because at least one of a or b is false

const expression6 = !(a || b); // false 
// false because at least one of a or b is true

const expression7 = a && a; // true
// true because both a and a are true