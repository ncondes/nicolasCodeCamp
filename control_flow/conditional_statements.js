// A conditional statement is a set of commands that executes if a specified condition is true.

// if (Condition 1) {
//    statement 1
// } else if (condition 2) {
//    statement 2
// } else {
//    statement 3
// }


// Falsy Values

// - false
// - undefined
// - null
// - 0
// - NaN
// - ""

const x = true;

if (x === true) {
   console.log('x es true');
}

if (x) {
   console.log('x also exists')
}

// const user = await db.connect()
// const user = await User.findById()
// if (user) {
//    statement
// }


// Switch statement
// A switch statement allows a program to evaluate an expression and attempt to match the expression's value to a case label.
// If a match is found, the program executes the associated statement.

const name = 'Mateo';

switch (name) {
   case 'Androw':
      console.log('Elo: Gold');
      break;
   case 'Nicolas':
      console.log('Elo: Platinum');
      break;
   case 'Mateo':
      console.log('Elo: Diamond');
      break;
   default:
      console.log('Unranked');
}


// Ternary operator

// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?),
// then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.
// This operator is frequently used as an alternative to an if...else statement.

// (condition) ? (expression if true) : (expression if false)

// Example

const age = 25;
const isAdult = age >= 18 ? true : false;

console.log(isAdult);

// Conditional chains

const number = 6;
const color =
   number === 1
      ? 'Black'
      : number === 2
         ? 'Yellow'
         : 'White';



console.log(color);

// condition 1
//    => Check if condition 1 is true, if so execute value 1, otherwise check condition 2.
//    ? value 1
//    : condition 2 
//       => Once condition 2 is checked, if it is true execute value 2, otherwise check condition 3 and so on ...
//       ? value 2
//       : condition 3
//    ? value 3
//    => value 4 it's just the default option in case all the conditions behind were false.
//    : value 4


// Try / Catch

// The try...catch statement marks a block of statements to try, and specifies one or more responses should an exception be thrown.
// If an exception is thrown, the try...catch statement catches it.

try {
   // code to be executed
   const age = user.age;
} catch (error) {
   console.log(error)
   throw new Error(`There was a mistake, ${error}`)
}


// Throw statement

// Use the throw statement to throw an exception. A throw statement specifies the value to be thrown:

// throw expression;