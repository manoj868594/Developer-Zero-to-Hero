// 1. sync and async kya hota hai ?
// sync ka mtlb ek ke baad dusra kaam hoga, jb tk ek completed naa ho tb tk dusra start nhi hoga.
// setTimeout, setInterval, promises, axios, XMLHttpRequest (synchronous)
// async mtlb sare kaam ek saath start karna, jiska answer phle aayega uska jwaab de dena.
console.log("Hello 1")
setTimeout(() => {
    console.log("Hello 2")
}, 2000);
console.log("Hello 3")

// callback means function

// 2. JS is not asynchronous
// stack two type :- main stack and side stack, main stack has primary priority
// it has event loop jo ki check krta hai ki side stack main koi kaam khtm hua yaa nhi aur agr hua h to main stack le jana.
// JS is single threaded 

// callback
// fetch, axios, promises, setTimeout, setInterval (ye request bhejte h)
// jb complete ho jaaye tb answer milta h:-  then, catch, callbacks, async, await
// callback hamesa ek function hota h
// callback function async code ke completion hone pr chlta hai
// callbacks
//  then catch
//  async await
let ans = new Promise(function(res, rej){
    if(true){
        return res();
    }else{
        return rej();
    }
});
ans.
then(function(){
    // console.log("Resolved")
}).catch(function(){
    // console.log("Rejected")
});

let ans1 = new Promise(function(res, rej){
    var num = Math.floor(Math.random()*10);
    if(num<5){
        return res(`${num} is below < 5`);
    }else{
        return rej(`${num} is above > 5`);
    }
});
ans1.then(function(data){
    console.log(data);
})
.catch(function(data){
    console.log(data);
});

// async await
async function abc(){
    // let raw = await fetch(`https://www.google.com`);
    let data = await raw.json();
};
abc();