"use strict"

// var a;
// document.write(typeof(a));
// // console.log(a)
// document.write("<br>")

// var a = '';
// document.write(typeof(a));
// // console.log(a)
// document.write("<br>")

// var b = undefined;
// // console.log(b)
// document.write(typeof(b));
// document.write("<br>")

// var b = "This is \"string\""
// document.write(b)
// document.write("<br>")

// var youtube = "Thapa"
// var name = "Tech"
// document.write(youtube +" "+ name)
// document.write("<br>")

// var fn = 5
// fn /= 15;
// document.write(fn)

// let abc = setInterval(randomMath, 500);
// function randomMath(){
//     let ranMath = Math.floor(Math.random() * 20);
//     document.getElementById("random").innerHTML = "floor: " +ranMath;
//     let ceilMath = Math.ceil(Math.random() * 20);
//     document.getElementById("ceilMath").innerHTML = "Ceil: "+ceilMath;
//     let roundMath = Math.round(Math.random()*20);
//     document.getElementById("round").innerHTML = "round: "+roundMath;
// }

// $(document).ready(function(){
//     $(window).scroll(function(){
//         let positionScroll = $(document).scrollTop();
//         // console.log(positionScroll)
//         if((positionScroll > 7) && (positionScroll < 250)){
//             $("#main1").addClass('animate__zoomIn')
//         }
//     })
// })

// const anum = 213;
// function a1(){
//     const leta1 = 'a1';
//     // console.log(leta1)
//     a2();
//     function a2(){
//         const leta2 = 'a2';
//         // console.log(leta1)
//         a3()
//         function a3(){
//             let leta3 = 'a3'
//             // console.log(anum)
//         }
//     }
// }
// a1();

// window.addEventListener('mousemove', mouseMove);
// let mouseXStartPoint = 0;
// let mouseXEndPoint = window.innerWidth;
// let currentXPosition = 0;
// let fracXValue = 0;
// let mouseRange = mouseXEndPoint - mouseXStartPoint;
// function mouseMove(e){
//     // console.log(`X: ${e.clientX}, Y: ${e.clientY}`)
//     currentXPosition = e.clientX - mouseRange;
//     fracXValue = currentXPosition / mouseXEndPoint;
//     // console.log(fracXValue)
// }

// function reverseString(){
//     const dataValue = document.getElementById('reverseName').value;
//     let newString = "";
//     for(let i=dataValue.length-1; i>=0; i--){
//         newString += dataValue[i];
//     }
//     document.getElementById('showData').value = newString;
// };
// reverseString();

// function checkLove(){
//     let loveName1 = document.getElementById('lovename1').value;
//     let lovename2 = document.getElementById('lovename2').value;
//     if(loveName1 == ""){
//         alert("Please Enter Your Name");
//     }else if(!isNaN(loveName1)){
//         alert("Numbers are not allowed!");
//     }else if(loveName1.length <= 2){
//         alert("Your name min length is 3");
//     }else if(lovename2 == ""){
//         alert("Please Enter Love Name");
//     }else if(!isNaN(lovename2)){
//         alert("Numbers are not allowed!");
//     }else if(lovename2.length <= 2){
//         alert("Love name Min length is 3");
//     }else{
//         let loveData = Math.random()*100;
//         loveData = Math.floor(loveData);
//         document.getElementById('loveValue').value = loveData+"%";
//     }
// }

// function bmicheck(){
//     let weight = document.getElementById('weight').value;
//     let height = document.getElementById('height').value;
//     let BMIValue = document.getElementById('bmiValue');
//     height = (height * 12)* 0.025;
//     // height = height * 0.025; // now in meter
//     let newBmiValue = weight / (Math.pow(height,2));
//     newBmiValue = Math.round(newBmiValue);
//     BMIValue.value = newBmiValue;
// }

// let guestName = ["abc1","abc2","abc3","abc4","abc5"];
// let namepromp = prompt("What is your name?")
// let checkName = guestName.includes(namepromp);
// if(checkName == true){
//     alert(`Welcome ${namepromp}`)
// }else{
//     alert(`Sorry ${namepromp} not invited.`)
// }

// let FizzBuzz = [];
// function fizbuz(){
//     for(i=1;i<=100;i++){
//         if((i%5) == 0 && (i%3) == 0){
//             FizzBuzz.push(" FizzBuzz <br>");
//         }else if((i%3) == 0){
//             FizzBuzz.push(" fizz ")
//         }else if((i%5) == 0){
//             FizzBuzz.push(" buzz ")
//         }else{
//             FizzBuzz.push(i+" ")
//         }
//     }
//     document.write(FizzBuzz);
// }
// fizbuz();

// ludoGame = () =>{
//     let diceRandom1 = Math.floor((Math.random()*6) + 1);
//     // console.log(diceRandom1)
//     const playerdice1 = `../img/dice-six-faces-${diceRandom1}.png`;
//     document.getElementById('check1').setAttribute('src', playerdice1);

//     let diceRandom2 = Math.floor((Math.random()*6) + 1);
//     const playerdice2 = `../img/dice-six-faces-${diceRandom2}.png`;
//     document.getElementById('check2').setAttribute('src', playerdice2);
//     const result = document.getElementById('result');
//     if(diceRandom1 > diceRandom2){
//         result.innerHTML = "Player 1 win"
//     }else if(diceRandom1 < diceRandom2){
//         result.innerHTML = "Player 2 win"
//     }else{
//         result.innerText = "Draw match"
//     }
// }

// const database = [
//     { username: "Thapa", password: "1234"},
//     { username: "vinod", password: "123" }
// ];
// const statuses = [
//     { status: "Thapa waiting your friends"},
// ];
// const usrname = prompt('Enter Your username:');
// const pass = prompt("Enter your password");
// const login = (user,pass)=>{
//     if(user === database[0].username && pass === database[0].password){
//         console.log(statuses[0].status);
//     }else{
//         console.log("Wrong")
//     }
// }
// login(usrname,pass);

// function fa(){
//     debugger;
//     console.log("fa")
//     fb();
//     console.log("fa2")
// }
// function fb(){ debugger; console.log("fb"); fc(); }
// function fc(){ debugger; console.log("fc") }
// debugger;
// fa();

// console.log(`I am a ${job}`);
// var job = "Web Developer"
// console.log(`I am a ${job}`);
// function WhoIam(){
//     console.log(`I am a ${job}`);
//     var job = "Full Stack"
//     console.log(`I am a ${job}`);
// }
// WhoIam();

// the scope chain is used to resolve the value of variable names in JS.
// scope chain in js is lexicallye defined, which means that we can see what the scope chain will be by looking at the code.
// At the top of the scope chain is the global scope, which is the window object in the browser.
// Lexical scoping:- a function that is lexically within another function get access to the scope of the outer function.(Parent function variable access by inner function but not inner function variable  access by parent.)

// Scope Chain 
// var a = "Hello Guys! "
// function first(){
//     var b = " How are you? "
//     second();
//     function second(){
//         var c = " My name is Manoj "
//         console.log(a+b+c);
//         three();
//         function four(){
//             console.log(a+b+c) // cannot access d
//         }
//         four();
//     }
// }
// function three(){
//     var d = "Nice talk to you."
//     console.log(a+d) // cannot access b and c
// }
// first();

// const arr = [
//     { name: "Manoj", pass : "abc"},
//     { name: "Thapa", pass : "abc"}
// ]
// const arr1 = [1,2,3,4]
// console.log(typeof(arr));
// console.log(typeof(arr1));
// console.log(Array.isArray(arr));

// let like = 1000; // pass by value
// const youtube = { //pass by reference
//     name: "thapa techniacal",
//     sub: "10M"
// }
// const thapa = (a,b) => {
//     a  = 200;
//     b.sub = "100M";
// }
// thapa(like,youtube);
// console.log(like);
// console.log(youtube.sub);

// const typingObj = [
//     "The quick brown fox jumps over the lazy dog.",
//     "A sentence that contains all 26 letters of the English alphabet is called an English pangram. \"The quick brown fox jumps over the lazy dog\" is a well-known pangram, but there are many others",
//     "The five boxing wizards jumped quickly",
//     "The jay, pig, fox, zebra, and my wolves quack",
//     "An English pangram is a sentence that contains all 26 letters of the English alphabet. The most well known English pangram is probably 'The quick brown fox jumps over the lazy dog'. Here is a list of pangrams to use with your students: The five boxing wizards jumped quickly."
// ]
// const msg = document.getElementById('msg');
// const words = document.getElementById('words');
// const btn = document.getElementById('sbtn');
// let startTime, endTime;
// const playGame= () => {
//     let randomNum = Math.floor(Math.random()*typingObj.length);
//     // console.log(randomNum)
//     msg.innerText = typingObj[randomNum];
//     let date = new Date();
//     startTime = date.getTime();
//     btn.innerText = "Done";
// };
// const endGame = () => {
//     let date = new Date();
//     endTime = date.getTime();
//     let totalTime = ((endTime - startTime) / 1000);
//     console.log(totalTime);

//     let totalStr = words.value;
//     let wordCount = wordCounter(totalStr);
//     let speed = Math.round((wordCount / totalTime) * 60);
//     let finalmsg = "You typed total is "+speed+" words per minutes. ";
//     finalmsg += compareWord(msg.innerText , totalStr);
//     msg.innerText = finalmsg;
// };
// const compareWord = (str1,str2) => {
//     let words1 = str1.split(" ");
//     let words2 = str2.split(" ");
//     let cnt = 0;
//     words1.forEach(function(item, index){
//         if(item == words2[index]){
//             cnt++;
//         }
//     })
//     let err = (words1.length - cnt);
//     return (cnt+ " corrcet out of "+words1.length+" words and total number of error are "+err+".");
// }
// const wordCounter = (str) => {
//     let response = str.split(" ").length;
//     console.log(response);
//     return response;
// };
// btn.addEventListener('click', function(){
//     if(this.innerText == "Start"){
//         words.disabled = false;
//         playGame();
//     }else if(this.innerText == "Done"){
//         words.disabled = true;
//         btn.innerText = "Start";
//         endGame();
//     }
// })

// // Below code run only on apache server or other server software
// function mylang(data){
//     const ajaxreq = new XMLHttpRequest();
//     ajaxreq.open('GET',`http://127.0.0.1:5500/js/ThapaAjax.php?selectvalue=${data}`, true);
//     ajaxreq.send();
//     ajaxreq.onreadystatechange = function(){
//         if(ajaxreq.readyState === 4 && ajaxreq.status === 200){
//             document.getElementById('select2').innerHTML = ajaxreq.responseText;
//         }else{
//             console.error(ajaxreq.status)
//             console.log("Wrong request")
//         }
//     }
// }

// class Students{
//     constructor(name,age){
//         this.myname = name;
//         this.myage = age;
//     }
//     biodata(){ // intance method
//         return`Hi My name is ${this.myname} & age ${this.myage}`;
//     }
// }
// class Player extends Students{
//     constructor(name,age,game){
//         super(name,age);
//         this.myGame = game;
//     }
//     play_bio(){
//         return `${super.biodata()}. I am player of ${this.myGame}`;
//     }
// }
// let obj = new Player('Manoj',"24","Football");
// let obj2 = new Students("Jain","21")
// console.log(obj)
// console.log(obj.play_bio())

// const wait = () => {
//     console.log("JS is starting")
//     let start = new Date().getTime();
//     console.log(new Date().getTime() - start);
//     while(new Date().getTime() - start < 5000)
//         console.log("All Is Well")
// }
// document.getElementById('clickme').addEventListener('click', wait);

// const getRoll = () => { // callback 
//     setTimeout(() => {
//         let Roll = [1,2,3,4,5,6]
//         console.log(Roll);
//         setTimeout((roll) => {
//             let bioName = { name :"Manoj" }
//             console.log(`Name ${bioName.name}, Roll no. ${roll}`)
//             setTimeout((name,roll) => {
//                 let gender = [
//                     { gen : "male"},
//                     { gen : "Female"}
//                 ]
//                 console.log(`${gender[0].gen}, ${bioName.name} ${roll}`)
//             }, 2000, bioName,Roll[1])
//         }, 2000, Roll[1]);
//     }, 2000)
// }
// getRoll();

// const prom = new Promise((resolve,reject) =>{
//     let roll = [1,2,3,4,5,6,7]
//     resolve(roll);
//     reject("Error")
// })
// const getBio = (indexData) => {
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             let biodata = {
//                 name: 'vinod',
//                 age: 29
//             }
//             resolve( `My roll no. is ${indexData}. Name ${biodata.name}. Age is ${biodata.age}. `)
//         }, 2000,indexData);
// })}
// prom.then((rollno) =>{
//     console.log(rollno)
//     return getBio(rollno[1])
// }).then((abc)=>{
//     console.log(abc);
// }).catch((err)=>{
//     console.log(err)
// });

const form = document.getElementById('form');
const usrname = document.getElementById('usrname');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const cpass = document.getElementById('cpass');

form.addEventListener('submit', function(e){
    e.preventDefault();
    validat();
})
const isEmail = (emailValue) => {
    let atSym = emailValue.indexOf("@");
    if(atSym < 1) return false;
    let dot = emailValue.lastIndexOf('.');
    if(dot <= atSym + 2) return false;
    if(dot === emailValue.length - 1) return false;
    return true;
}
const validat = () => {
    const usrnameVal = usrname.value.trim();
    const emailVal = email.value.trim();
    const passVal = pass.value.trim();
    const cpassVal = cpass.value.trim();
    if(usrnameVal === ""){
        setErrorMsg(usrname, "Username can't be blank");
    }else if(usrnameVal.length <= 4){
        setErrorMsg(usrname, "Username min 4 character");
    }else{
        setSuccessMsg(usrname);
    }
    if(emailVal === ""){
        setErrorMsg(email, "Email can't be blank");
    }else if(isEmail(emailVal)){
        setErrorMsg(email, "Not a valid email");
    }else{
        setSuccessMsg(email);
    }
}

// 45:53