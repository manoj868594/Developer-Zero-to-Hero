class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}kfj38fd9fs`
    }
    set password(value){
        this._password = value
    }
}
const hitesh = new User("h@hitesh.ai", "ajkdf")
// console.log(hitesh.password)
// console.log(hitesh.email)


/*****************Property Get Set*************************/
function User1(email, password){
    this._email = email
    this._password = password
    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}
const chai = new User1("chai@chai.com", "chai")
// console.log(chai.email)


/*****************Object Get Set*************************/
const User2 = {
    _email: 'h@email.com',
    _password: 'abc',
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const tea = Object.create(User2)
console.log(tea._email)