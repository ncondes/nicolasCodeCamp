// The find() method returns the first element in the provided array that sastisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.

const arr = [5, 12, 8, 130, 44];

console.log(arr.find((e) => e > 10));

// Example
// Find an object in an array by one of its properties

const inventory = [
   { name: 'apples', quantity: 2 },
   { name: 'bananas', quantity: 0 },
   { name: 'cherries', quantity: 5 }
];

console.log(inventory.find((fruit) => fruit.name === 'cherries'))


// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
// Otherwise, it returns - 1, indicating that no element passed the test.

const search = (arr.findIndex((e) => e > 200));
(search === -1)
   ? `No hay el objeto en el invetario`
   : `Si hay el objeto y hay tantas cantidades`


// Exercise
// Find the index of a prime number in an array

const isPrime = (num) => {
   for (let i = 2; i < num; i++) {
      if (num % i === 0) {
         return false;
      }
   }
   return true;
}

console.log([4, 6, 7, 9, 12].findIndex(isPrime));

