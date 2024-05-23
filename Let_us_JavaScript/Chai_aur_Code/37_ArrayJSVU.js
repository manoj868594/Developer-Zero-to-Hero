const myArr = []
// %DebugPrint(myArr)

// continuous, Holley

// SMI (small integer)
// Packed element
// Double (float, string, function)

// PACKED_SMI_ELEMENTS
const arrTwo = [1,2,3,4,5,6]

// PACKED_DOUBLE_ELEMENTS
arrTwo.push('7.0')

// PACKED_ELEMENTS
arrTwo.push('8')

//  HOLLEY_SMI_ELEMENT
arrTwo[11] = 11

console.log(arrTwo)
console.log(arrTwo.length)
console.log(arrTwo[9])

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 9)
// hasOwnProperty(Object.prototype, 9)

// holes are very expensive in JS

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrThree = new Array(3)
// just 3 holes HOLEY_SMI_ELEMENTS
arrThree[0] = '1' // HOLEY_ELEMENTS
arrThree[1] = '2' // HOLEY_ELEMENTS
arrThree[2] = '3' // HOLEY_ELEMENTS

const arrFour = []
arrFour.push('1') // PACKED_ELEMENTS
arrFour.push('2') // PACKED_ELEMENTS
arrFour.push('3') // PACKED_ELEMENTS

const arrFive = [1, 2, 3, 4]
arrFive.push(NaN) // PACKED_DOUBLE
