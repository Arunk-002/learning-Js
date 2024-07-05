// -----------------------callbacks-----------------

// function greet(name, callback) {
//     console.log(`Hello, ${name}!`);
//     callback();
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("John Doe", sayGoodbye);

function walk(callback){
    setTimeout(()=>{
        console.log('Walked');
        callback();
    },2000)
}
function eat(callback){
    setTimeout(()=>{
        console.log("finished eating");
        callback();
    },1500)
}
function sleep(callback){
    setTimeout(()=>{
        callback();
        console.log("sleeped"); 
    },2500)
}
//Normal way

// walk();
// eat();
// sleep();

//order not okay

//using callbacks
walk(()=>{
    eat(()=>{
        sleep(()=>{  
        })
    })
})

