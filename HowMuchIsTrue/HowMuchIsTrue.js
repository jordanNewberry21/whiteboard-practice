function countTrue(arr) {
    let trueCount = 0;
   for (let bool of arr) {
       if (bool) {
           trueCount += 1;
       }
   } return trueCount;
}

console.log('*** Testing countTrue:')
console.log(`countTrue([true, true, true, false, false, true, false]) ➞ 4, actual: `, countTrue([true, false, true, true, false, true, false]));
console.log(`countTrue([true, false, false, true, false]) ➞ 2, actual: `, countTrue([true, false, false, true, false]));
console.log(`countTrue([false, false, false, false]) ➞ 0 , actual: `, countTrue([false, false, false, false]));
console.log(`countTrue([]) ➞ 0 , actual: `, countTrue([]));
