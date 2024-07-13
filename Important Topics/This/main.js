// This  keyword in js behaves differently in certain scenarios.
// In Strict / non Strict mode it behaves differently, that is because of a concept "this substitution".
// This substitution:
// If the value of this keyword is undefined or null then it's replaced by the globalObject ,
// if it's not on the strict mode.

"use strict";

console.log(this);
// Inside an Object:

let obj={
    name:"Jawan",
    age:76,
    displayDetails(){
        console.log(`Name is ${this.name} and is ${this.age} years old`);
        // Here 'this' points to the obj itself.
    }
}

obj.displayDetails();

// Inside functions:
// Incase of  functions the "this" keyword is binded to it's enclosing  lexical enviornment.
function s(){
    console.log(this);// if use  strict mode it will logg undefined. Otherwise due to this substitution,
    // globalObject will be logged.
}
s();
// Inside a function this behaves differently because if we call it by referencing any other object it will 
// use it as an reference.

window.s();// this will logg window object since we are calling it by referencing ,
// an window object (in strict mode).

let obj2={// enclosing lexical enviornment.
    name:"Tiger",
    age:46,
    displayDetails:()=>{
        console.log(this);
    }
    // This function points to the window  since it's enclosing lexicla enviornment is this the obj.
}
obj2.displayDetails();
// enclosing lexical enviornment of displayDetails().
let obj3={
    name:"Lal",
    age:34,
    // enclosing lexical enviornment of x().
    displayDetails:function(){
        let x=()=>{
            console.log(this);// This functions enclosing lexical enviornment is dispalyDetails().
        }
        x();
    }
    // This function points to the window  since it's enclosing lexical enviornment is this the obj.
}
obj3.displayDetails();

