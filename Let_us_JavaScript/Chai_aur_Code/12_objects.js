// Objects declaire:- Literal and Constructor
// singleton made by only constructor

// Object literals
const mySim = Symbol("Hitesh")
const JSuser = {
    name: "Hitesh",
    [mySim]: "Hites",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false
}
// console.log(JSuser.email) // wrong way to access
// console.log(JSuser["email"]) //ONLY use in string
// console.log(JSuser[mySim]) //symbol print

JSuser.greeting = function(){
    console.log("Hello JS user")
}
JSuser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`)
}
// console.log(JSuser.greeting) // function(anonymous)
// console.log(JSuser.greeting())
// console.log(JSuser.greetingTwo())

Object.freeze(JSuser)
JSuser.name = "Hitesh Chaudhary"
// console.log(JSuser)


// Object Constructor (singleton)

const tinderUser = new Object() //singleton empty object
const tinderUser1 = {} // non-singleton empty object
// console.log(tinderUser1,tinderUser)

tinderUser1.id = "213jds"
tinderUser1.name = "Hitesh"
tinderUser1.isLoggedIn = true

// console.log(tinderUser1)
// console.log((Object.keys(tinderUser1))) //Returns the names of the enumerable string properties and methods of an object.
// console.log((Object.values(tinderUser1))) //Returns an array of values of the enumerable properties of an object.
// console.log((Object.entries(tinderUser1))) //Returns an array of keys/values of the enumerable properties of an object.
// console.log(tinderUser1.hasOwnProperty("isLogged")) // check property exist or not

const regularUser = { //object
    email: "some@google.com",
    fullname: { //object
        userfullname: { //object
            firstname: "Hitesh",
            lastename: "chaudhary"
        }
    }
} //multiple objects
// console.log(regularUser.fullname.userfullname.firstname) //for access

const obj1 = {1:"a",2: "b"}
const obj2 = {3:"c",4:"f"}
const obj4 = {5:"ffg",7:'fsd'}

// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj1) // if in obj3 not add {} this than value store in obj1 because {} this is target object
// console.log(obj3) 

// const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3)

// value get by database
const usrs = [
    {
        id:1,
        email: "a@google.com"
    },
    {
        id: 2,
        email: "b@google.com"
    },
    {
        id: 3,
        email:"c@google.com"
    }
]
// console.log(usrs)

// Destructuring
// IN {} curly brases using destructuring and In this JSON value
const course = {
    coursename: "JS in Hindi",
    prict: "999",
    couseInstructor: "Hitesh"
}
// course.couseInstructor
const {couseInstructor: instructor} = course //also short name define 

// console.log(instructor)

// Object api also get in array like this:-
// [
//     {},
//     {},
//     {},
// ]

// website
// https://randomuser.me/ //for array api check
// https://jsonformatter.org/  /for format api check