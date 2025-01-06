const num = [1,2,3,4,5,6,7,8,12,15]

for(let i=0;i<num.length;i++){
    // console.log(num[i])
}

num.forEach((e)=>{
    // console.log(e*e)
})

const name = "Manoj"
const arr = Array.from(name) // used to create an array from any other object
// console.log(arr)

const num1 = [2,4,3,5,7]
for(let item of num1){ // returns the value
    // console.log(item)
}
for(let i in num1){ // i returns index and num[i] reurns value
    // console.log(i)
}

const arr1 = [43,54,65,76,87]
let newarr = arr1.map((value,index)=>{ // return new array
    // console.log(value+index)
})

const arr2 = [43,44,65,76,78]
let returnTrue = arr2.filter((val)=>{ // return true value in array
    return val <= 50
})
// console.log(returnTrue)

const arr3 = [3,5,7,7]
let newArr3 = arr3.reduce((h1,h2)=>{
    return h1 + h2;
})
// console.log(newArr3)

