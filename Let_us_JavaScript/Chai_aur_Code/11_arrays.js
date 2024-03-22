// () parenthises , [] brackets , {} curly brasis

// THe array object, as with arrays in other programming languages, enables storing a collection of multiple otem under a single variable name, and has members for performing common array operations.
// 1. JavaScript arrays are resizable and can contain a mix of different data types.
// 2. JS arrays is not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes like [""]
// 3. JS arrays are zero-indexed
// 4. JS array copy operations create shallow copies

// Shallow copies and Deep copy
// A shallow copy of and object is a copy whose properties share the same refrences as those of the source object from which the copy was made.
// A deep copy of an object is a copy whose properties do not share the same refrences as those of the source obejct from which the copy was made.

// method of array:- concat([]) , copyWith() , fill() , pop() , push([]) , reverse() , shift() , sort() , splice() , slice() , every() , filter() , flat() , forEach() , indexOf() , map() , reduce()

let myArr = [0,1,2,3,4,5] //these are elements //object array
const myHeros = ["shaktiman", "naagraj"]
myHeros.push("shakti") // add new value
myArr.pop() //remove last value in array
myHeros.unshift("Hitesh") // add starting new value in array
myArr.shift() // remove starting value in array

// console.log(myHeros[0])
// console.log(myHeros)
// console.log(myArr)
// console.log(myArr.includes(8)) //true or false value check for comparison
// console.log(myArr.indexOf(0)) // if index value does't exist than output is -1

const newArr = myArr.join()

// console.log( myArr) // object
// console.log(newArr)
// console.log( typeof newArr) //string

//slice, splice

// console.log("A", myArr)
const myn1 = myArr.slice(0,3) // last range not print
// console.log(myn1)
// console.log("B", myArr) // same value print of A
const myn2 = myArr.splice(0,3) // remove slice part
// console.log("C",myArr) // Here remove slice 
// console.log(myn2)

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", 'flash', "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros) // Combines two or more arrays
// console.log(allHeros)

// const all_new_hero = [...marvel_heros, ...dc_heros] // work same as concat
// console.log(all_new_hero)

const real_another_array = [1, 2, 3, [4,5],[7,5,4,3], 4,8,10,11,33,22,]

// console.log(real_another_array.flat(Infinity))

const another_real = real_another_array.flat()
// console.log(another_real)

// console.log(Array.isArray(real_another_array))
// console.log(Array.isArray("Hitesh")) //define an array is ture or false
// console.log(Array.from("Hitesh")) // Creates an array from an iterable object
//*  console.log(Array.from({name: "hitesh"})) // empty array output if not define
const score1 = 100
const score2 = 200
console.log(Array.of(another_real, score1, score2)) // Returns a new array from a set of elements.

// Enough now learn arrays :-  isArray , of , from , flat , push , concat , ...