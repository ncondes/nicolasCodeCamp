// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// To access part of an array without modifying it, see slice().

// splice(start, deleteCount, item1, item2, ... itemN)

const months = ['Jan', 'March', 'April', 'June'];

// add Feb between Jan [] March
months.splice(1, 0, "Feb");
console.log(months)

// replace June -> May
months.splice(4, 1, 'May');
console.log(months);

// add a bad record
months.splice(3, 0, 'Shit');
console.log(months)

// delete shit
months.splice(3, 1);
console.log(months)

// months.splice(2, 3, '1', '2', '3');
// console.log(months)

months.splice(0, 2);
console.log(months);