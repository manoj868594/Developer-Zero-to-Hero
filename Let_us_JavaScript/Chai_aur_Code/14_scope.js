//scopes {this is scope}
var c = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a) // let block scope
// console.log(b) // const also block scope 
// console.log(c) // var global scope

//nested scope
function one(){
    const usrname = "Hitesh"

    function two(){
        const website = "Youtube"
        // console.log((usrname))
    }
    // console.log(website) //get error not defined
    two()
}
one()

if(true){
    const usrname = "Hitesh"
    if(usrname === "Hitesh"){
        const website = " YouTube"
        // console.log((usrname + website))
    }
    // console.log(website) //First error
}
// console.log(usrname) // second error

//******************Interesting/Important************************/

console.log(addone(5)) //Can access 'addone' before initialization
function addone(num){
    return num + 1
}
// addone(5) // it's return not give output
console.log(addone(5))

// console.log(addTwo(5)) //Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))