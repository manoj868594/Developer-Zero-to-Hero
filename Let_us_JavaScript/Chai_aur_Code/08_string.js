const name = "Hitesh"
const repoCount = 50

// console.log(name + repoCount + "Value") //It's Outdated concatination form

// Now use ``
// console.log(`Hello my name is ${name} and repo is ${repoCount}`)

const gameName = new String('Hitesh hc com')

// console.log(gameName[2]); // output by index
// console.log(gameName.__proto__) // black object found in {}
// console.log(gameName.length) //legnth is 6
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4)) // check index
// console.log(gameName.indexOf('t')) // check character

// const newString = gameName.substring(0,4)
// console.log(newString+ " substring") //output is Hite 4 digits तक print होगा And Give only +ve value
const anotherString = gameName.slice(-6, 2)
// console.log(anotherString); /// Give also -ve value

const greeting = "    Hello    " 
//The trim method whitespace from both ends of a string and returns a new string, without modifying the original string.
// console.log(greeting)
// console.log(greeting.trim())

const url = "https://hitesh.com/hitesh%20chaudhary"
let urlrep = url.replace("hitesh%20chaudhary", "5a764b80-9d29-4c0b-81db-e1972ac0df8f")
// console.log(urlrep)
// console.log(urlrep.includes('hitesh'))
console.log(gameName.split(' hc '))

// console.log(gameName.length) // These method check in practice console with output (Below some method or functions)
// anchor , at , big , blink , bold , charAt , charCodeAt , codePointAt , concat , constructor , endsWith , fixed , fontcolor , fontsize , includes , indexOf , isWellFormed , italics , lastIndexOf , length , link , localeCompare , match , matchAll , normalize , padEnd , padStart , repeat , replace , replaceAll , search , small , slice , split , startWith , strike , sub , substr , sup , toLocaleLowerCase , toLocaleUpperCase , toLowerCase , toUpperCase , trim , valueOf