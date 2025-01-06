let marks = [32, 43, 54, 13, null, "Abcent", false]
console.log(marks)
console.log(marks[2])
console.log("The length of marks ",marks.length)
console.log(typeof marks)

let numberMarks = []
const stringMarks = []
const otherMarks = []
for(let i=0;i<marks.length;i++){
    if(typeof marks[i] === 'number'){
        numberMarks.push(marks[i])
    }else if(typeof marks[i] === 'string'){
        stringMarks.push(marks[i])
    }else{
        otherMarks.push(marks[i])
    }
    console.log(marks[i]) // one by one marks print
}
console.log(numberMarks) // number
console.log(stringMarks) // string
console.log(otherMarks)  // boolean, null, undefined
// console.log(typeof marks[0])

// Arrays Method
let num = [1,2,3,4,5]
const b = num.toString();
console.log(b,typeof b)
const c = num.join("_") // joins all the array elements using a separator
console.log(c,typeof c)
const d = num.pop() // removes last element from the array
console.log(num,d)
const e = num.push(6) // add a new element at the end of the array and also return pop element
console.log(num,e)
const f = num.shift() // removes 1st element and return it
console.log(num,f)
const g = num.unshift(7) // Add element to the beginning. Return new array length
console.log(num,g)
const h = delete num[3] // Array elements can be deleted using the delete operator
console.log(num,h)
let num1 = [8,9,11,45,78]
const i = num.concat(num1) // Used to join array to given array.
console.log(num, i)
let compare = (a,b) => { // return value ascending or descending order
    return a-b;
}
const j = i.sort(compare) // sort an array alphabetically
console.log(j)
const num2 = [4,5,6,7,8,8,88,7,7,6,5,55]
const k = num2.reverse()
console.log(k)

const num3 = [1,2,4,5,6,7,8,9]
const deletedvalue = num3.splice(2,5,43,54,65,76,77,65,54,43,32) // 2 is position, 5 is no. of element remove, and element to be added
console.log(num3)
console.log("Splice Value",deletedvalue)

let slicenum = num3.slice(4,7) // slice out a piece from an array. It creata a new array
console.log(num3)
console.log("Slice value",slicenum)

let name1 = "Manoj"
let name2 = null
console.log(name1.localeCompare(name2))

const regex = /[A-Z]/g; // if not found than return null (a-z,0-9)
console.log(name1.match(regex)) // match the same character
