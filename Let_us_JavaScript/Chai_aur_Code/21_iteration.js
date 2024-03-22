
/****************** for loop *********************/

for (let i = 0; i < 10; i++) {
    const element = i;

    // console.log(element)
}

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) { //pratice with all relational operator (== , < , > , => , =<)
        // console.log(`${i} is element`)
    }
    // console.log(element)
}

for (let i = 1; i <= 6; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 1; j <= 10; j++) { // j<i check
        // console.log(`Inner loop ${j}`)
        // console.log(i + ' * ' + j + ' = ' + i*j)
    }
}

let myArr = ["flash", "superman", "batman"]
// console.log(`Array length ${myArr.length}`)
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element)
}

// break
for (let index = 0; index <= 10; index++) {
    if(index == 6){
        // console.log(`Detected ${index}`)
        break
    }
    // console.log(index)
}

// continue
for (let index = 0; index <= 10; index++) {
    if(index == 6){
        // console.log(`Detected ${index}`)
        continue
    }
    // console.log(index)
}

/****************** while loops *********************/

let index = 1
while (index <= 10) {
    // console.log(`Value is ${index}`)
    index = index + 2
}

let myArr1 = ["flash", "batman", "superman"]
let arr = 0
while (arr <myArr1.length) {
    // console.log(`Value is ${myArr1[arr]}`)
    arr = arr+1
}

// do-while => first print than condition check
let score = 11
do {
    // console.log(`Score is ${score}`)
    score++
} while (score <= 10);


/****************** for of *********************/

// ["" , "" , ""] // Array
// [{} , {} , {}] // Object

// for array
const arr1 = [1,2,3,4,5]
for (const num of arr1) {
    // console.log(num)
}

// for string
const greet = "Hello world!"
for (const greetings of greet) {
    // console.log(`Each char is ${greetings}`)
}

// maps return in object
const maps = new Map()
maps.set('IN', "India")
maps.set('USA', "United States of America")
maps.set('Fr', "France")
// console.log(maps)
for (const [key,value] of maps) {
    // console.log(key, value)
}

// object is iterable or not
const myObj = { // object is not iterable
    game1: "NFS",
    game2: "GTAV"
}
// for (const key of myObj) { //get error not iterable
//     console.log(key)
// }

/****************** for in *********************/

const myObject = {
    js: "JavScript",
    cpp: "C++",
    rb: "Ruby",
    ms: "Microsoft"
}
for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(`${key} => ${programming[key]}`)
}

/****************** For each *********************/
const coding = ["js", "ruby", "java", "python"]
coding.forEach( function (val) {
    // console.log(val)
} )

// arrow function
coding.forEach( (item) => {
    // console.log(item)
} )

function printMe(item) {
    // console.log(item)
}
coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
    // console.log(item, index, arr)
} )

const myCoding = [
    {
        language: "Hindi",
        languagefileName: "Hi"
    },
    {
        language: "English",
        languagefileName: "En"
    },
    {
        language: "Urdu",
        languagefileName: "urdu"
    },
]
myCoding.forEach( (item) => {
    // console.log(item.languagefileName)
})

const value = coding.forEach( (item) => {
    // console.log(item)
    return item
})
// console.log(value)

/****************** For each *********************/
const Num = [1,2,3,4,5,6,7,8,9,10]
const MyNum = Num.filter( (num) => {
    return num > 5
} )
// console.log(MyNum)

const newNums = []
Num.forEach( (num) => {
    if (num > 5) {
        newNums.push(num)
    }
})
// console.log(newNums)

const Books = [
    {title: "Book 1", genre: "History", publish: 1999, edition: 2005},
    {title: "Book 2", genre: "History", publish: 1990, edition: 2000},
    {title: "Book 3", genre: "Science", publish: 1995, edition: 1999},
    {title: "Book 4", genre: "Science", publish: 2000, edition: 2010},
    {title: "Book 5", genre: "Fiction", publish: 2010, edition: 2020},
];
const bkgenre = "Fiction"
const bkpublish = '2000'
const useBooks = Books.filter( (bk) => bk.genre === bkgenre ) // without scope use
const userBooks = Books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === bkgenre
}) // must use return
// console.log(useBooks)
// console.log(userBooks)

const myNum = [1,2,3,4,5,6,7,8,9,10]
let newNum = myNum.map( (num) => num === 10)
// console.log(newNum)
newNum = myNum.map( (num) => {return num === 10}) //must use return keyword in block scope
// console.log(newNum)
newNum = myNum.map( (num) => num < 10)
// console.log(newNum)
newNum = myNum.map( (num) => num + 10)
// console.log(newNum)

const newNumber = myNum
                .map( (num) => num * 2)
                .map( (num) => num + 1)
                .filter( (num) => num >= 10)
// console.log(newNumber)

/****************** Reduce *********************/
const myNums1 = [1,2,3,4,5]
const myTotal = myNums1.reduce( function (acc, curt) {
    // console.log(`acc: ${acc} curt: ${curt}`)
    return acc + curt // also check add any number
}, 0)
// console.log(myTotal)

const myTotal1 = myNums1.reduce( (acc,curt) => acc+curt, 2)
// console.log(myTotal1)

const Cource = [
    { itemName: "JS", price: 1999 },
    { itemName: "ReactJS", price: 999 },
    { itemName: "Python", price: 2999 },
]
const PriceTotal = Cource.reduce( (acc,item) => acc + item.price, 0)
// console.log(PriceTotal)