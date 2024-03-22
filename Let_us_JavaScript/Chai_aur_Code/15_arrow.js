const user = {
    usrname: "hitesh",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.usrname} , welcome to website`) //refer current context
        console.log(this)
    }
}
// user.welcomeMsg()
// user.usrname= "sam"
// user.welcomeMsg()

// console.log(this) // browser console output different

function chai(){
    let username = "Hitesh"
    // console.log(this)
    // console.log(this.username) // output undefined
}
chai()

const chai1 = function(){
    let username = "Hitesh"
    // console.log(this.username) // Here also output undefined
}
chai1()

const chai2 = () =>{
    let username = "Hitesh"
    // console.log(this.username) // Here also output undefined
}
chai2()

// explicite return - when use return keyword
const addTwo = (num1,num2) => {
    return num1+num2
}
// console.log(addTwo(3,4))

// implesit return
const addto = (num1,num2) => (num1+num2) // In () cannot use return
// console.log(addto(3,5))

// object return must be use () curly brasis
const addto1 = (num1,num2) => ({username: "Hitesh"})
// console.log(addto1())

// use function in array
const myArr = [2,4,5,6,7]

// myArr.forEach(() => {})
// myArr.forEach(() => ())
// myArr.forEach(function () {})


