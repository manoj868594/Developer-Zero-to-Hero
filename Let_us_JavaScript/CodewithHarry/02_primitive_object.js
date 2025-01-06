// Primitive data type -> NN SS BB U
// Null, Number, Sybmbol, String, Boolean, Bigint, Undefined

let a = null;
let b = 4534;
let c = true;
let d = BigInt("434") + BigInt("6");
let e = "Harry"
let f = Symbol("I am a nice symbol")
let g = undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g)

// Non-Primitive Data type -> Object in JS
const item = {
    "A": true,
    "B": false,
    "C": 43,
    "D": undefined,
    "E": "Harry "
}
console.log(item["G"])