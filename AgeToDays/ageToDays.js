const ageToDays = (age) => {
    return Number(age) * 365;
}

console.log('*** Testing AgeToDays:')
console.log(`ageToDays(3) expected: 1095 , actual: `, ageToDays(3));
console.log(`ageToDays(65) expected: 23725 , actual: `, ageToDays(65));
console.log(`ageToDays(32) expected: 11680 , actual: `, ageToDays(32));
console.log(`ageToDays(27) expected: 10220 , actual: `, ageToDays(27));