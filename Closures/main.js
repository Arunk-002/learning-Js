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