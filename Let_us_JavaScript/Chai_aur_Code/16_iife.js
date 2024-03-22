//   Immediately Invoked Function Expressions (IIFE)
// Global scope ke pollution se problem hoti h to us global scope ke variables ya jo diclaration h unke pollution ko htaane ke liye IIFE ka use kiya

(function chai(){ //named IIFE
    console.log(`DB Connected`)
})(); //must use semicolum for invoke funstion

((name) => {
    console.log(`DB Connected Two ${name}`)
})("Hitesh")