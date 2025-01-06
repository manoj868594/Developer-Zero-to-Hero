let a = "Harry" //
console.log(a)
a = "can Update but not redeclared" 
{
    let a = "let is block scoped"
    console.log(a)
}
console.log(a)

var b = "ABC"
console.log(b)
var b = "can update & redeclared"
console.log(b)
{
    var b = "var is global scope"
    console.log(b)
}
console.log(b)

const c = "Manoj"
console.log(c)
// c = "cannot be update and redeclaired"
{
    const c = "const is block scope"
    console.log(c)
}
console.log(c)