
// Hoisting
console.log("Hoisting--------------------------------------------------------");

// So Hoisting is concept explains how the decleration and working of js happens.
// This is a basic example of hoisting in js.

// loggOnCosole();
// var num1=0;
// function loggOnCosole(){
//     console.log("Hello World");
// }

// In this we can see  we are calling the function even before the decleration of it. Normally this will throw an error but in js it doesn't.
// Because in js memories are alocated to variables and functions() even before the execution of the first line of code.
// Therefor this will log "Hello world" to the console.
// In functions the whole function are send to the top but in case of variables only memories are alocated but are not declared.

console.log(num1);
loggOnCosole();
var num1=0;
function loggOnCosole(){
    console.log("Hello World");
}

// Here if we try to print num1 it will not throw error but will log "undefined", because in the Global Execution Scope num1 is created but value
// is not assigned.

// let j = function loggOnCosole(){
//     console.log("Hello World");
// }

// let c = ()=>{
//     console.log("Hello World");
// }

// Both the above functions will be treated as variables and therfore can't be accesed before decleration.

console.log("-------------------------------------------------------------------------------------------------------------------------------------")

// Closures
console.log("Closures--------------------------------------------------------");
// This is a basic example of how closures work in js.
function display(){
    const a = 'Hello world'
    //  Here this variabel  a is declared inside the scope of display().
    function logg(){
        console.log(a);
        // Here when we call 'a' we noramly think that it will show a error since const is block-scoped.
        // But this will not show any error.
    }
    logg();
}
display();
// Here logg() will log the 'a' to the console.
// The actual working of this is that when function is returning or moved to the top of callstack using Hoisting.
// the function() always returns with it's Lexical enviornment.
// ie, When a logg() is returning it looks a in it's own scope and if it's not found in that scope, it looks in it's lexical scope.
// The following case will also work.
function display(){
    const a = 'Hello world'
    return function logg(){
        console.log(a);
    }
}
const l = display();
l();
// This will also call logg().
// ----------example------------
function main(){
    let counter=0;
    console.log("Inside main: ",counter);
    return function counterIncrement(){
        counter++;
        console.log("Inside conterIncrement :",counter)
    }
}
const x = main();
x();
// In this example we can see that counter is only restricted  to the main() and is not passed to the counterIncrement().
// but due to closures this variable can be accessed by counterIncrement().

console.log("-------------------------------------------------------------------------------------------------------------------------------------")


