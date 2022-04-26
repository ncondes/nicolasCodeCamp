// Loops
// Loops offer a quick and easy way to do something repeatedly.

for (let step = 0; step < 5; step++) {
   // Run 5 times, with values of step 0 through 3.
   console.log(`Walking north ${step} step`);
}

// for ([initial expression]; [condition expression]; [increment expression]) {
//    statement ...
// }

// do while
// The do...while statement repeats until a specified condition evaluates to false.

let counter = 11
do {
   counter++
   console.log(counter);
} while (counter < 10);

// while
// A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:

let count = 11;
while (count < 10) {
   count++
   console.log(count)
}

// In the while loop the condition test occurs before statement in the loop is executed.


// labels
// A label provides a statement with an identifier that lets you refer to it elsewhere in your program.

let i = 0;
whileLoop: while (i < 5) {
   i++
   console.log(i);
}

// break statement
// Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.

for (let i = 0; i < 10; i++) {
   console.log(i);
   const item = `id-${i}`
   if (i === 3) break;
}

// Example

const array = [
   ['1', '0', '0', '0', '0'],
   ['0', '1', '0', '0', '0'],
   ['0', '0', '1', '0', '0'],
   ['0', '0', '0', '1', '0'],
   ['0', '0', '0', '0', '1'],
];

loopThroughTheMatrix: for (let i = 0; i < array.length; i++) {
   loopThroughTheColumns: for (let j = 0; j < array.length; j++) {
      console.log(`In the row: ${i} one was find in column ${j}`);
      if (array[i][j] === '1') {
         break;
      }
   }
   console.log('\n');
}

// continue statement
// The continue statement can be used to restart a while, do-while, for, or label statement.

let k = 0;
let n = 0;

while (k < 5) {
   k++;
   if (k === 3) {
      continue;
   }
   n += k;
   console.log(`Iteration ${k} => n: ${n}`);
   console.log(n);
}


const members = ['Androw', 'Julian', 'Zakki', 'Nicolas'];

// for in statement
// The for...in statement iterates a specified variable over all the enumerable properties of an object.
for (const index in members) {
   console.log(index);
}

// for of statement
// // The for...of statement creates a loop Iterating over iterable objects
for (const member of members) {
   console.log(member);
}


const arr = [3, 5, 7];
arr.sayHi = 'Hello :D';

for (let i in arr) {
   console.log(i);
}

for (let i of arr) {
   console.log(i);
}