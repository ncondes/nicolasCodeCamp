const arr = [1, 2, 3, 4, 5];

function myFunction(elemento) {
   if (elemento % 2 === 0) {
      return true
   }
}

// ES6

// const myFunction = (e) => {
//    if (e % 2 === 0) return true;
// }

// function sayHi(name) {
//    return `Hello ${name}`;
// }

// const sayHi = name => `Hello ${name}`;




console.log(arr.filter(myFunction))

console.log(arr.filter((e) => e % 2 === 0))