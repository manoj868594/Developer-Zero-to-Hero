/**
 * What is the Opeerator
 * An operator is a symbol that performs an operation on one or more operands, such as variables or values, and produces a result.
 * 
 * In JavaScript, there are various types of operations that can be performed on different data types. These operations can be broadly categorized into the following types:
1. **Arithmetic Operations:**
   - Addition (`+`)
   - Subtraction (`-`)
   - Multiplication (`*`)
   - Division (`/`)
   - Modulus (`%`)

2. **Assignment Operations:**
   - Assignment (`=`)
   - Addition assignment (`+=`)
   - Subtraction assignment (`-=`)
   - Multiplication assignment (`*=`)
   - Division assignment (`/=`)
   - Modulus assignment (`%=`)

3. **Comparison Operations:**
   - Equal to (`==`)
   - Not equal to (`!=`)
   - Strict equal to (`===`)
   - Strict not equal to (`!==`)
   - Greater than (`>`)
   - Less than (`<`)
   - Greater than or equal to (`>=`)
   - Less than or equal to (`<=`)

4. **Logical Operations:**
   - Logical AND (`&&`)
   - Logical OR (`||`)
   - Logical NOT (`!`)

5. **Bitwise Operations:**
   - Bitwise AND (`&`)
   - Bitwise OR (`|`)
   - Bitwise XOR (`^`)
   - Bitwise NOT (`~`)
   - Left shift (`<<`)
   - Right shift (`>>`)
   - Unsigned right shift (`>>>`)

6. **Unary Operations:**
   - Unary plus (`+`)
   - Unary minus (`-`)
   - Increment (`++`)
   - Decrement (`--`)
   - Typeof (`typeof`)
   - Void (`void`)
   - Logical NOT (`!`)

7. **Ternary (Conditional) Operator:**
   - Conditional (Ternary) Operator (`? :`)

8. **String Operations:**
   - Concatenation (`+`)
   - String length (`length` property)

9. **Object Property Access:**
   - Dot notation (`.`)
   - Bracket notation (`[]`)
 */

let value = 3
let negValue = -value
// console.log(negValue)

let num1 = 2
let num2 = 2
// console.log(num1 + num2, num1 - num2, num1 * num2, num1 / num2, num1 % num2, num1 ** num2)

let str1 = "Hello"
let str2 = " Hitesh"
let str3 = str1 + str2
// console.log(str3)

// Here Output Problem
// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 3)
// console.log(1 + 2 + "3")

// To abstract operation ToPrimitive takes argument input and optional argument preferred and return either a normal completion containing an ECMAScript language vlaue or a throw completion. It converts its input argument to a non-Object type.

let gameCounter = 100 //gameCounter is operand
console.log(gameCounter) // o/p 100
gameCounter++; //Postfix value
console.log(gameCounter) // o/p 101

/**
 * define prefix and postfix ?
 * In JavaScript, prefix refers to an operator appearing before its operand (e.g., `++gameCounter`), and postfix refers to an operator appearing after its operand (e.g., `gameCounter++`).
 * 
 * 
 * What is Operand ?
 * An operand is a value or expression on which an operator performs an operation. Operators in JavaScript are symbols or keywords that perform operations on one or more operands, and these operands can be variables, literals, or other expressions. For example, in the expression `str1 + str2`, both `str1` and `str2` are operands, and the `+` is the operator that performs addition on these operands.
 */