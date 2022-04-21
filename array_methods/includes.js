// The includes() method determines wheter an aray includes a certain value among its entries
// Returning true or false as appropiate.

const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3));


const isInclude = (array, element) => {
   for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
         return true;
      }
   }
   return false;
}

console.log(isInclude([1, 2, 3, 4, 5], 3))