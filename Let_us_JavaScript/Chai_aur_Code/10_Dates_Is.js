// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970 UTC

let myDate = new Date()
console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString()) //Date
// console.log(myDate.toLocaleString()) // Date & Time
// console.log(myDate.toLocaleTimeString()) // Time
// console.log(typeof myDate) //object

let myCreatedDate = new Date(2024, 1, 13)
// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Date.now()/1000)
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDate())
// console.log(`Date ${newDate.getDate()} and Month ${newDate.getMonth() + 1} and Year ${newDate.getFullYear()}`)

newDate.toLocaleString('default', {
    weekday: "long",
})