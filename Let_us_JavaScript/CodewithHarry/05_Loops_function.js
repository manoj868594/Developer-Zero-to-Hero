let sum = 0
let n = 3
for(let i=0;i<n;i++){
    sum += (i+1)
    console.log(sum)
}
console.log("Sum of natural "+ sum);

//factorial using for loop
function factorial(num){
    result = 1
    for(i=1;i<=num;i++){
        result *= i
    }
    return result;
}
console.log(factorial(5))

// factorial using recursion
function factorial1(num1){
    if(num1 === 0 || num1 === 1) return 1;
    return num1*factorial1(num1-1);
}
console.log(factorial1(3))

let obj = {
    harry: 90,
    shvika: 80,
    shiva: 99,
    sonu: 29,
    monu: 20
}
for(let a in obj){
    console.log("Marks of "+a+" is "+obj[a])
    if(obj[a]< 33){
        console.log(a+" has failed, try again")
    }
}

for(let a of "Harry"){
    console.log(a)
}

let num2 = 4
let i1 = 0
while(i1<num2){
    console.log(i1)
    i1++;
}

let i2 = 0
do{
    console.log(i2)
    i2++
}while(i2<num2);

let age = 3;
for(let i3=1;i<age;i3++){
    if(age<=5){
        console.log("You are kid, enjoy your life.")
    }
    console.log("Done")
}

// Functions
function onePlusAvg(x,y){
    return (1+(x+y)/2)
}
let a = 2
let b = 3
let c = 4
console.log("One Plus Average",onePlusAvg(a,b))
console.log("One Plus Average",onePlusAvg(b,c))
console.log("One Plus Average",onePlusAvg(c,a))

const sum1 = (x,y) => {
    let c = x+y
    return c;
}
let addi = sum1(5,3)
console.log(addi)