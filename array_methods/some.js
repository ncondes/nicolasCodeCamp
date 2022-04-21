// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.
// It doesn't modify the array.

const arr = [1, 7, 3, 4, 5];

console.log(arr.some((e) => e % 2 === 0));



console.log(arr.some((e, i) => {
   if (e % 2 === 0) {
      console.log(`El elemento par es ${arr[i]}`)
      return e % 2 === 0;
   } else {
      console.log(`Elemento impar ${e}`)
   }
}));
