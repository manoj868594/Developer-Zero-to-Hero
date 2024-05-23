class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added ${this.username}`)
    }
}
const chai = new Teacher("chai", "chai@google,com", "3289")
// chai.addCourse()
const masalaChai = new User("maalaChai")
// masalaChai.logMe()
console.log(chai instanceof Teacher) // true
console.log(chai instanceof User) // true


/*****************Static Property*************************/
class User1{
    constructor(usrname){
        this.usrname = usrname
    }
    logMe2(){
        console.log(`Username ${this.usrname}`)
    }
    static createID(){
        return `123`
    }
}
const manoj = new User("Hitesh")
// console.log(manoj.createID()) // error 

class Teacher1 extends User{
    constructor(usrname, email){
        super(usrname)
        this.email = email
    }
}
const iphone = new Teacher1("iphone","i@phone.com")
// iphone.logMe2;
// console.log(iphone.createID()) // error cannot access outside

// 45 completed