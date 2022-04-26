// Function

// Functions are one of the fundamental building blocks in JavaScript.
// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value,
// but for a procedure to qualify as a function, it should take some input and return an output
// where there is some obvious relationship between the input and the output.
// To use a function, you must define it somewhere in the scope from which you wish to call it.

// Definig functions

// declarative functions
// camelCase
function theNameOfTheFunction(arguments) {
   // statements ...
}

const number = 4;

function square(number) {
   return number * number;
}

console.log(number)
console.log(square(5));

function myFunction(obj) {
   obj.make = 'Mazda';
}

const myCar = {
   make: 'Honda',
   model: 'Gran Touring Lx',
   year: 2023,
}


let x;
let y;

x = myCar.make;
console.log(x);

myFunction(myCar);

y = myCar.make;
console.log(x);
console.log(y);

// Function expressions
const squareNumber = function (number) {
   return number * number;
}

const z = squareNumber(6);
console.log(z);

// Function expressions are convenient when passing a function as an argument to another function.
// The following example shows a map function that should receive a function as first argument and an array as second argument:

function mapNumbers(func, array) {
   let result = [];
   for (let i = 0; i < array.length; i++) {
      result[i] = func(array[i]);
   }
   return result;
}

const cube = function (number) {
   return number * number * number;
}

const numbers = [0, 1, 2, 5, 10];

// Nested Functions with function expressions
const cubedNumbers = mapNumbers(cube, numbers);
console.log(cubedNumbers)

const squaredNumbers = mapNumbers(square, numbers);
console.log(squaredNumbers)

// arrow function & map method
console.log(numbers.map((number) => number ** 2));


// Note: Functiones can be defined based on a condition

let randomFunction;

if (true) {
   randomFunction = function (obj) {
      obj.make = 'BMW'
   }
}

console.log(randomFunction);


// Function Scope

// Variables defined inside a function cannot be accessed from anywhere outside the function,
// because the variable is defined only in the scope of the function.
// However, a function can access all variables and functions defined inside the scope in which it is defined.

// In other words, a function defined in the global scope can access all variables defined in the global scope.
// A function defined inside another function can also access all variables defined in its parent function,
// and any other variables to which the parent function has access.

const num1 = 2, num2 = 3, name = 'Chamakh';

// This function is defined in the global scope
function multiply() {
   // num1 & num2 have access to that scope
   return num1 * num2;
}

console.log(multiply());

// a nested function example
function getScore() {
   const num1 = 10;
   const num2 = 33;
   // private functions || variables
   function add() {
      return `${name} scored ${(num1 + num2)}`;
   }
   return add();
}

console.log(getScore());
console.log(num1);


// Clousures :D
function createCounter(initialValue) {
   let counter = initialValue;
   return {
      add() {
         counter++
      },
      substract() {
         counter--
      },
      getValue() {
         return counter;
      }
   }
}

const counter1 = createCounter(10);

console.log(counter1.getValue())

counter1.substract()
counter1.substract()
counter1.substract()

console.log(counter1.getValue())

counter1.add()

console.log(counter1.getValue())

