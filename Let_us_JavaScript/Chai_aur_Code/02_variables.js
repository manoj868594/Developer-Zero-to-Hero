/**********************let, const, var*******************************/

// A variable is a symbolic name for a value that can be used to store and manipulate data within a program.
// In JavaScript, variables are used to store and manipulate data. They can hold various types of data, such as numbers, strings, arrays, objects, and more.

//1. The `let` declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
//2. The `var` statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.
//3. The `const` declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed.
//4. {} this is scope
//5. The `let` and `const` keywords are used for variable declarations.
//6. Variables in JavaScript are declared using keywords such as `let`, `const`, or `var`, and they can be reassigned to new values of compatible types.

const accountID = 3189318
let accountEmail = "manoj@gmail.com"
var accountPassword = "83924820" // Prefer not to use var beacause of issue in block scope and functional scope
accountCity = "Haryana" // this is not good for programmer without declare variable
let accountState; // output is `undefined` variable

// Reassign value for practice
// accountID = 42342 // not allowed reassign
accountEmail = "abc@gmail.com"
accountPassword = "4389480"

 console.log(accountCity) // single variable data output
 console.table([accountID, accountEmail, accountPassword, accountCity, accountState]) // table form multiple data output

// Using 'let' to declare a variable with block scope
let x = 10;

// Using 'const' to declare a constant variable with block scope
const y = 20;

/*
Here `accountID, accountEmail, accountPassword, accountCity, accountState` is variables and `let`,`const`, `var` is keywords
*/
