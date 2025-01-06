var a = [11,22,3,4,12,32];
var b = a;
// console.log(b.pop())
// console.log(a)

if("apple"){
    // console.log("IF condition work")
}else{
    // console.log("wrong")
}

var a = 12;
while(a<20){
    // console.log(a);
    a++;
}

function abc(a){ // a is parameter
    console.log(a);
}
// abc([1,2,3,4,4]); //arguments

const arr1 = [1,2,3,4,5];
arr1.push(6)
// console.log(arr1)
arr1.pop()
// console.log(arr1)
arr1.unshift(7)
// console.log(arr1)
arr1.shift()
// console.log(arr1)
arr1.splice(3,1); // index and how many value delete
// console.log(arr1)

const obj ={
    name:"Manoj",
    age: 23,
    methd: function(){},
    defaults: false
}
// obj.methd

function abcd(){
    // let i;
    for(let i=1;i<4;i++){
        // console.log(`Inner ${i}`)
    }
    // console.log(`Outer ${i}`)
}
// abcd()

var a = 12;
let b1 = 2323;
// and check in browser type window

function ab(){
    var a1 = 'a1'
    function ab1(){
        var b2 = 'b2';
        function ab2(){
            var c1 = "Manoj"
        }
    console.log(a1)
    }
    ab1()
}
// ab()

var aref = [1,2,3,4,5];
var bref = [...aref];
// console.log(bref)
// console.log(`aref ${aref}`)
bref.pop()
// console.log(`bref ${bref}`)
// console.log(`aref ${aref}`)

var obj1 = {
    name: "harsh"
};
var cpobj = {...obj1}
// console.log(cpobj)
cpobj.name = "harshit"
// console.log(cpobj)
// console.log(obj1)

// falsy values = 0, null, false, undefined, document.all, NaN

if(NaN){
    // console.log("hey")
}else{
    // console.log("Hello")
}

var a2 = [1,2,3,434,54,6,56,67,6,];
a2.forEach(function(val){
    // console.log(val+2)
})

var obj2 = {
    name: "Hearsh",
    age: 24,
    city: "Bhopal"
}
for (const key in obj2) {
    // console.log(key)
    // console.log(obj2)
    // console.log(key, obj2[key])
}

setTimeout(function(){
    // console.log("2 sec")
},2000);

// console.log(Array.isArray([]))
// console.log(Array.isArray({}))

var a3 = {
    name: "Manoj",
    age: 23,
    class: "BCA"
}
// console.log(a3);
delete a3.class
// console.log(a3)

function constractor() {
    this.name = "ABC"
    this.width = 12;
    this.height = 23;
}
const con1 = new constractor();
const con2 = new constractor();
// console.log(con1,con2)

function circularButton(color){
    this.radius = 2; // prototype inheritance
    this.color = color;
    this.icon = false;
    this.pressable = true;
}
const redbtn = new circularButton('red');
const greenbtn = new circularButton('green');
// console.log(redbtn,greenbtn)

const ans = (function(){
    var private = 434;
    return {
        getter: function(){
            console.log(private)
        },
        setter: function(val){
            private = val;
        }
    }
})()
// console.log(ans.getter(),ans.setter(32),ans.getter());

// Prototype inheritance
var humans = {
    canFly: false,
    canTalk: true,
    havEmotions: true
}
var sheryiansStudent = {
    canMakeAnimationWebsite: true,
    canMakeAmazingWebsite: true
}
sheryiansStudent.__proto__ = humans;
// console.log(sheryiansStudent);

// console.log(this); // windows object

const button = document.querySelector('button');
// button.addEventListener("click", function(){
//     this.style.color = 'green';
//     this.style.backgroundColor = 'black';
//     console.log(`Press ${this.innerHTML}`)
// })

// call apply bind
function abcd2(){
    console.log(this);
}
// abcd2(); // window
const obj3 = {
    age: 23
}
// console.log(abcd2.call(obj3)) // object

function abcd3(val1,val2){
    console.log(this,val2, val1)
}
const obj4 = {
    age: 34
}
// console.log(abcd3.call(obj4,3,2));
// console.log(abcd3.apply(obj4, [1,3]));
const bindedfun = abcd3.bind(obj4,4,5);
// bindedfun();