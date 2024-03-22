/********** JavaScript Execution Context ************/
// 1. Global Execution Context (this)
// 2. Function Execution Context
// 3. Eval Execution Context (MongoDB)

// Phase
// 1. Memory Creation Phase (Variables ki memory allocate hoti hai, execute nhi kiya jata)
// 2. Execution Phase (isme variables excute hote h)
let val1 = 10;
let val2 = 5;
function addNum(num1,num2){
    let total= num1 + num2
    return total
}
// console.log(addNum(val1,val2))
// console.log(addNum(10,3))


function one(){
    // console.log("One")
    Two()
}
function Two(){
    // console.log("Two")
    Three()
}
function Three(){
    // console.log("Three")
}
one()
Two()
Three()