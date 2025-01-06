console.log(3+5)
// Arithmetic Operators
let a = 54
let b = 5
console.log("a+b",a+b)
console.log("a-b",a-b)
console.log("a*b",a*b)
console.log("a/b",a/b)
console.log("a**b",a**b)
console.log("a%b",a%b)
console.log('a++',a++)
console.log("a",a)
console.log("a--",a--)
console.log(a)

// Assignment operator
let assign = 3
assign += 19 // increament
console.log("increament",assign)
assign -= 3 // decreament
console.log(assign)
assign *= 2 // multiply
console.log(assign)
assign /= 2 // divide
console.log(assign)
assign %= 3 // modulous
console.log(assign)
assign **= 3 // power
console.log(assign)

// Comparison Operator
console.log(2 == "2") // equal to
console.log(2 === "2") // equal to and type check
console.log(2 != 3) // not equal to
console.log(2 !== "2") // not equal to and type
console.log(2 > 3) //greater than
console.log(2 < 3) // less than
console.log(2 >= 3) // greater than or equal to
console.log(2 <= 2) // less than or equal to
console.log("Hi" ? "Thanks" : "Nice") // ternary operator

// Logical Operator
console.log(2<=3 && 2==="2")
console.log(2<=3 || 2==="2")
console.log(!false)

// Conditional Statement
// if ... else, else if statement
let age = 12
if(age <= 0){
    console.log("Age is invalid");
}else if(age <= 18){
    console.log("Your age below 18");
}else{
    console.log("You are age above 18");
}
console.log(age>18 ? "can drive" : "cannot drive")

