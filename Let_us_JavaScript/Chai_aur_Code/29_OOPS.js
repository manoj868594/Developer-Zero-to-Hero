/*****************Object literals*************************/
const user = {
    usrname: "Hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Get user Details")
        // console.log(`Username: ${this.usrname}`)
        // console.log(this)
    }
}
// console.log(user.signedIn)
// console.log(user.getUserDetails())
// console.log(this)

/*****************Constructor Function*************************/
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    // return this; // optional
}
// console.log(new User("Hitesh", 12, true))
// const userOne = new User("ChaiAurCode", 4342, true)
// const userTwo = new User("ABC", 2, false)
// console.log("USerOne: ",userOne)
// console.log("UserTwo: ",userTwo)

/*****************Functions*************************/
function multiply(num){
    return num*5;
}
multiply.power = 2;
// console.log(multiply(5))
// console.log(multiply.power)
// console.log(multiply.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increament = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    // console.log(`Price ${this.score}`)
}
const chai = new createUser("chai", 25)
const tea = createUser("Tea", 110)
chai.printMe()

/*
Here what happens behind the scene when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The construtor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript asumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

/*****************Prototype*************************/
let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.manoj = function(){
    console.log(`Manoj is present`)
}
Array.prototype.heymanoj = function(){
    console.log(`Hello Manoj`)
}
// heroPower.manoj()
// myHeros.manoj()
// heroPower.heymanoj();
// myHeros.heymanoj();

/*****************Inheritance*************************/
const User1 = {
    username: "Manoj",
    email: "manoj@gov.in"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User1

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}
// anotherUsername.trueLength()
// "Manoj".trueLength();
// "iceTea".trueLength();

/*****************Call*************************/
// Remember this 
// window = {this = window} // this reffer window
// node = {} //empty object reffer

function SetUserName(usrname){
    // complex DB calls
    this.usrname = usrname
}
function createUser(usrname, email, password){
    SetUserName.call(this, usrname)
    this.email = email;
    this.password = password;
}
const chaiusr = new createUser("chai", "chai@google.com", "dsd123")
console.log(chaiusr)