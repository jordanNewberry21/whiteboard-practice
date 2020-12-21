function points(twoPointers, threePointers) {
	return (twoPointers*2) + (threePointers*3);
}


console.log('*** Testing points:')
console.log(`points(2, 4) expected: 16 , actual: `, points(2, 4));
console.log(`points(4, 4) expected: 20 , actual: `, points(4, 4));
console.log(`points(7, 12) expected: 50 , actual: `, points(7, 12));
console.log(`points(10, 4) expected: 32 , actual: `, points(10, 4));