console.log("log")
console.info("Info")
console.warn("Warning")
console.error("Error")
console.assert("Error" != false)
console.assert("Error" == false)

// console methods
// assert, clear, context, count, countReset, createTask, debug, dir, dirxml, error, group, groupCollapsed, groupEnd, info, log, memory, profile, profileEnd, table, time, trace, warn

console.time("a")
for(let i=0;i<5;i++){
    console.log(i=i+i)
}
console.timeEnd("a")

console.time("b")
let j = 0
while(j<5){
    console.log(j=j+j)
    j++;
}
console.timeEnd("b")