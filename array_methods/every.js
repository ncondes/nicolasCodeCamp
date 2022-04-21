// The every() method test wheter all elements in the array pass the test implemented by the provided function. It return a Boolean value.

const arr = [1, 30, 39, 29, 10, 13];

console.log(arr.every((e) => e < 40));

// Examples
// Testing size of all array elements

const isBigEnough = (element, index, array) => element >= 10;

console.log([12, 5, 8, 130, 44].every(isBigEnough))
console.log([12, 54, 18, 130, 44].every(isBigEnough))

// Exercise
// Check if one array is a subset of another array
// Test if all the elements of an array are present in another array

// Hint: Remember the .includes() method


const isSubset = (arr1, arr2) => arr2.every((element) => arr1.includes(element));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 6, 7]))
