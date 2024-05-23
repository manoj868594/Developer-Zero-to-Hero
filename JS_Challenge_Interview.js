/****************Iterview**********************/
console.log(null === 0) // OUTPUT :- false
console.log(null > 0) // OUTPUT :- false
console.log(null == 0) // OUTPUT :- false
console.log(null >= 0) // OUTPUT :- true

/****************Iterview**********************/
var a = 10, b = 5
var c = (--a > 5 || --b > 10)
console.log(a) // OUTPUT :- 9
console.log(b) // OUTPUT :- 5
console.log(c) // OUTPUT :- true

/****************Iterview**********************/
console.log("20" + 5) //205
console.log("20" - 5) //15
console.log("20" * 5) //100
console.log("20" / 5) //4

/****************Iterview**********************/
console.log((5 + true) * false) //0

/****************Iterview**********************/
if(NaN === NaN)
    console.log("Hello")
else
    console.log("Bye Bye") //output Bye Bye

/****************Iterview**********************/
if(null || undefined)
    console.log("JS is easy")
else
    console.log("JS is simple") // output JS is simple

/****************Iterview**********************/
// difference undefined and not defined in java Scipt
var a1; //if variable is declare but not intialize
console.log(a1) //undefined
// console.log(a2) // error a2 is not defined

/****************Iterview**********************/
// What is difference between Static and Dynamic Memory?
// Static memory wo memory hoti hai jo compile time per memory allocate karti hai aur program execution ke phle memmory allocate karti hai
// Dynamic mmemory wo memory hoti hai jo program execution ke duration mein memory allocate karti hai
// Static memory ka management stack ke throw hota hai
// Dynamic memory ka management heap ke throw hota hai
// Static memory ko yadi 
// Dynamic memory reusability mein hoti hai means no longer required

/****************Iterview**********************/
let a3 = 10;
if(a3&a3){ // & is Bitwise Operator
    console.log("Data Flair"); //output Data Flair
}else{
    console.log("Free Course")
}
if(a3^a3){ // EXOR operator is same value 0
    console.log("Data Flair1")
}else{
    console.log("Free Course1") // output Free Course1
}

/****************Iterview**********************/
let s ="Hello" // in concat string is immutable(not changable)
s.concat("Data Flair")
console.log(s) // output Hello

/****************Iterview**********************/
const ar1 = [1,2,3] //array store in different memmory location
const ar2 = [1,2,3] // array object compare
if(ar1==ar2){
    console.log("Same")
}else{
    console.log("Not Same")
} // Not Same

/****************Iterview**********************/
function chcekGrade(p){
    return p>=60; // easiest way code

    // if(p>60){
    //     return true;
    // }else{
    //     return false;
    // } //output true
}
console.log(chcekGrade(70))

/****************Iterview**********************/
// octal cannot represent below 10 
const c1 = 0o10 // represent 0o (octal number) and 0x (Hexa-decimal number)
const c2 = 0x10
const c3 = c1+c2
console.log(c1,c2,c3) // 8 16 24

/****************Iterview**********************/
a = 5 , b = 5;
c = (++a>10 && ++b>5)
console.log(a) //6
console.log(b) //5
console.log(c) //false

a = 5 , b = 5;
c = (++a>5 && ++b>5) // if both condition is true
console.log(a) //6
console.log(b) //6 // value increase when both true
console.log(c) //true

/****************Iterview**********************/
// console.log(++5); // Here you get error this constant value
// applicable prefix/postfix operation only on variables not on constant 
const a4 = 7 // if assign const value than you get error
let a5 = 8
// console.log(++a4) // Assignment to constant variable error
console.log(++a5) // 9 

/****************Iterview**********************/
// const ps=require("prompt-sync")
// const prompt=ps({sigint:true})
// let name=prompt("Enter")
// console.log(`My Name is ${name}`)

/****************Iterview**********************/
if(10===10==10==0){ // 10===10 = 1(true) 1==10 = 0(false) 0==0
    console.log("Welcome") //Welcome
}else{
    console.log("Bye Bye")
}

/****************Iterview**********************/
let a6 = 5, b2;
b2=++a6 + a6++ + ++a6;
console.log(b2)

/****************Iterview**********************/
// for loop can use five times
console.log("First Type: ")
for(i=1;i<=3;i++){
    console.log(i)
}

console.log("Second Type: ")
    i=1;
for(;i<=3;i++){
    console.log(i)
}

console.log("Third Type")
for(i=1;i<=3;){
    console.log(i)
    i++
}

console.log("Forth Type")
    i=1;
for(;i<=3;){
    console.log(i)
    i++
}

console.log("Fifth Type")
 i=1;
// for(;;){ //because here condition not have
//     console.log(i)
//     i++
// }

/****************Iterview**********************/
{/* <marquee onmouseover="stop()" onmouseout="start()" style="background: red;">Hello World</marquee> //HTML */}

/****************Iterview**********************/
let a8=10,b3=10,c4=10
if(a===b==c){
    console.log("Hello")
}else{
    console.log("Bye")
} // Hello