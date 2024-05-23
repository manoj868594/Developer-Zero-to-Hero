class User {
    constructor(usrname, email, password){
           this .usrname = usrname;
           this.email = email;
           this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.usrname.toUpperCase()}`
    }
}
const chai = new User("Chai", "chai@gmail.com", "898")
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())


// behind the scene
function User1(usrname, email, password){
           this .usrname = usrname;
           this.email = email;
           this.password = password;
}
User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User1.prototype.changeUsername = function(){
    return `${this.usrname.toUpperCase()}`
}
const tea = new User1("Tea", "tea@gmail.com", "8789")
console.log(tea.encryptPassword())
console.log(tea.changeUsername())