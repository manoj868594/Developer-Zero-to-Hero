
/*****************closure*************************/
function outer(){
    let usrname = "hitesh"
    function innerOne(){
        let innerusr = "manoj"
        // console.log(innerusr)
        // console.log("innerOne ",usrname)
    }
    innerOne();
    // console.log(innerusr) // not define
    function innerTwo(){
        // console.log(innerusr) // not define
        // console.log("innerTwo",usrname)
    }
    innerTwo();
    // console.log(usrname)
}
outer();

/*****************Lexical scope*************************/
function makefunc(){
    const name = "Chrome"
    console.log("outer",name)
    function inner(){
        console.log(name)
    }
    return inner;
}
const myFunc = makefunc();
myFunc();