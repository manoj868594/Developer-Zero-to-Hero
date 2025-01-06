// Strings are used to store and manipulate text string can be created using the following syntax.
let name = "Manoj" // double quote string
console.log(name.length)
console.log(name[0])

let name1 = 'Harry' // Single quote string
console.log(name1.length)

let boy1 = "Harry"
let boy2 = "Manoj"
let frnd = `${boy1} is friend of ${boy2}` // Template literals
console.log(frnd)

// Escape Sequence Characters
let fruit = "Ban\'ana" // Escape single quote
console.log(fruit)
let fruit1 = "Ban\nana" // newline quote
let fruit2 = "Ban\tana" //tab quote
let fruit3 = "Ban\rana" // carriage return
console.log("fruit1 ",fruit1)
console.log("fruit2 ",fruit2)
console.log("fruit3 ",fruit3)

// Method of String
let dog = "The quick brown fox jumps over the lazy dog."
let name2 = "Harry"
console.log(name2.length)
console.log(name2.toUpperCase())
console.log(name2.toLowerCase())
console.log(dog.startsWith("THe quick"))
console.log(dog.endsWith("dog."))
console.log(name2.slice(2,4))
console.log(name2.replace("Har","Per"))

const word = "lazy"
console.log(`The word "${word}" ${dog.includes(word) ? "is" : "is not"} in the sentence.`)

let name3 = " Naman"
console.log(name2.concat(" is a friend of ",name3))
console.log("Harry trim ",name2.trim())
const regex = /Harry/i;
console.log(name2.replace(regex, "Manoj"))
console.log(dog.length)
console.log(dog.indexOf("dog"))

let fr = "Mohan"
console.log(fr[0])
console.log(fr.charAt([3])) // 3 is index where single character exist

// Quiz:- Use a for loop to print a string
for(let i=0;i<fr.length;i++){
    console.log(fr[i])
}

console.log("cat"[2])

const a = "a" // Numbers are always less in string & without string alway equal.
const b = "b"
console.log(typeof(b))
if(a<b) console.log(`${a} is less than ${b}`)
else if(a>b) console.log(`${a} is greater than ${b}`)
else console.log(`${a} is eaqual to ${b}`)
console.log(a.toUpperCase() === a.toLowerCase())

const s1 = "2+2" // Primitive number
const s2 = new String("2+2") // new string object
console.log(eval(s1)) // 4
console.log(eval(s2)) // [String: '2+2']
console.log(eval(s2.valueOf()))

const areEqual = (st1,st2,local = "en-US") =>{
    st1.localeCompare(st2,local,{sensitivity: "accent"}) === 0
}
console.log(areEqual("ß","ss","de"))
console.log(areEqual("1","I","tr"))

let splitstr = "Manoj"
console.log(splitstr.split("")) // [ 'M', 'a', 'n', 'o', 'j' ]