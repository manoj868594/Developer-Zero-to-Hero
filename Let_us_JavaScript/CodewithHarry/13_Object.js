const personObj = {
    fName: "John",
    lName: "Carter"
}
personObj.age = 23;
personObj["salary"] = 1200000
// console.log(personObj)

for(let members in personObj){
    if(personObj.hasOwnProperty(members)){
        // console.log(`The member ${members} of personObj is ${personObj[members]}`)
    }
}