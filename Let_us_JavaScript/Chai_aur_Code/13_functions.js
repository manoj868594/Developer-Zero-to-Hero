
function sayMyName(){
    console.log("H")
}
// sayMyName // it's Refrence
// sayMyName() // Execution

function twoNum(num1,num2 /*Here Parameters*/){
    console.log(num1 + num2)
}
twoNum(3,"4"); //when calling the function than pass the value that is called arguments like:- 3 or 4
const result = twoNum(3,"4") // this is not return value in console // Return is a consapte 
// console.log(result) // output is undefined

function twoNum(num1,num2 /*Here Parameters*/){
   let result = num1 + num2
   return result // after return, values never print
}
const result1 = twoNum(3,5) //not output
// console.log(result1) // output 8

function loginMessage(usrname){
    return `${usrname} just logged in`
}
// console.log(loginMessage()) // if value not pass than output undefined
// console.log(loginMessage("Hitesh"))

function loginMessage1(usrname1){
    if(!usrname1){
        console.log("Please enter a usrname");
        return
    }
    return `${usrname1} just logged in`
}
// console.log(loginMessage1()) // if user not type name

function loginMessage1(usrname1="sam"){ // default value assign like sam
    if(!usrname1){
        console.log("Please enter a usrname");
        return
    }
    return `${usrname1} just logged in`
}
// console.log(loginMessage1()) //if here value assign than overwrite the value

// ... (three dots) can say spraid operator or rest operator

function calculatePrice(val1,val2,...num){
    return num
}
// console.log(calculatePrice(10,20,30,40,50))

const user = {
    username: "Hitesh",
    price: 199
}
function handleObj(anyObj){
    // console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
}
handleObj(user)

const myNewArray = [200,400,600]

function returnSecValue(getArry){
    return getArry[0]
}
// console.log(returnSecValue(myNewArray))
// console.log(returnSecValue([200,400,600,800]))