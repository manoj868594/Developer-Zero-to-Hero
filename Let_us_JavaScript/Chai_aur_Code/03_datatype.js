/********************** Data Type *******************************/

// A data type defines the type of a value, specifying what kind of data it represents, such as numbers, strings, or objects.

"use strict"; // treat all JS code as newer version

/**
 * How many type of data type ?
 * JavaScript has several data types, which can be broadly categorized into two main groups: primitive data types and object data types. Here are the primary data types in JavaScript:

 * 1. **Primitive Data Types:**
 *  - **String:** Represents sequences of characters (e.g., "Hello").
 *  - **Number:** Represents numeric values (e.g., 42 or 3.14).
 *  - **Boolean:** Represents true or false.
 *  - **Null:** Represents the absence of a value.
 *  - **Undefined:** Represents a variable that has been declared but not assigned a value.
 *  - **Symbol:** Introduced in ECMAScript 6 (ES6), represents a unique identifier.
 *  - **BigInt:** Introduced in ES6, represents integers of arbitrary precision.

 * 2. **Object/Non-Primitive Data Type:**
  * - **Object:** Represents a collection of key-value pairs. Objects can be used to store and organize complex data structures.

 * 3. **Derived Data Types:**
 *  - **Function:** A subtype of object; functions are first-class citizens in JavaScript.
 *  - **Array:** A special type of object that represents an ordered list of values.
 *  - **Date:** Represents a specific point in time.

 * JavaScript is a dynamically typed language, meaning you don't explicitly specify the data type of a variable; the type is determined at runtime. This flexibility allows variables to change their types during the execution of a program.
 */

// alert( 3+3 ) // we are using nodejs not browser

// number range => 2 to power 53
// bigint
// string = ""
// boolean => true or false
// null => standalone value
// undefined => value not assign
// symbol => unique

console.log(typeof null) // output is object
console.log(typeof undefined) // output is undefined

// Object