/*****************First Promise*************************/
const promiseOne = new Promise(function(resolve, reject){
    // Do an asunc task
    // DB calls, cryptography, network
    setTimeout(function(){
        // console.log("Async task is complete");
        resolve();
    }, 1000);
})
promiseOne.then(function(){
    // console.log("Promise consumed");
})

/*****************Second Promise*************************/
new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async task 2")
        resolve();
    }, 1000)
}).then(function(){
    // console.log("Async 2 resolved")
})

/*****************Third Promise*************************/
const promiseThird = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@chaiaurcode.com"})
    }, 1000)
})
promiseThird.then(function(user){
    // console.log(user)
})

/*****************Four Promise*************************/
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false; // true / false
        if(!error){
            resolve({username: "Chai aut Code", email: "chai@chaiaurcode.com"});
        }else{
            reject('Error: Something went wrong')
        }
    }, 1000)
})
promiseFour.then((user)=>{
    // console.log(user);
    return user.username;
}).then((username)=>{
    // console.log(username)
}).catch(function(error){
    // console.log(error);
}).finally(()=>{
    // console.log("Done")
})

/*****************Five Promise*************************/
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; // true / false
        if(!error){
            resolve({username: "JS", password: "123"});
        }else{
            reject('Error: JS went wrong')
        }
    }, 1000)
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        // console.log(response)
    } catch (error) {
        // console.log(error)
    }
}
consumePromiseFive()

/*****************Six Promise*************************/
async function getAllUsers(){
    try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // const data = await response.json();
        // console.log(data);
    } catch (error) {
        // console.log("E: ",error);
    }
}
getAllUsers();

/*****************Seven Promise*************************/
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()
})
.then((data)=>{
    console.log(data)
}).catch((err)=>{console.log(err)})