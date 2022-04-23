export default function getMinJump(obstacles) {
   let jumpLength = 0;

   while (true) {
      jumpLength++

      // create an array with the positions of each jumpLength case
      const positions = [...Array(Math.max(...obstacles) + 1).keys()].filter((e) => e % jumpLength === 0);

      // if positions array does not includes one of obstacles array positions, break the loop and return the value
      if (positions.every((e) => !obstacles.includes(e))) break;
   }
   return jumpLength;
}

const obstacles = [2, 4, 6, 8, 10];
console.log(getMinJump(obstacles));