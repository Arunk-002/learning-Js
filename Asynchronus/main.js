// -----------------------callbacks-----------------
//so in callbacks we pass a function as an argument to another function.
//the main purpose of callbacks is to execute functions in orderly manner.
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// greet("John Doe", sayGoodbye);
// Here we are passing sayGoodye() as an argument to the greet().

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
        console.log("sleeped"); 
        callback();
    },2500)
}
//Normal way

// walk();
// eat();
// sleep();

// Here the order is not correct as each function takes different times to complete it's execution.
//order not okay

//using callbacks

// walk(()=>{
//     eat(()=>{
//         sleep(()=>{
//             console.log("task's finished") 
//         })
//     })
// })

// To correct this order we use callbacks. This helps us to excute functions in orderly manner.

// just assume that there are more task fuctions.like drink(),run(),laundry(),etc.
// so when try to call these functions using callbacks the code will look like this:

// walk(()=>{
//     eat(()=>{
//        drink(()=>{
//             run(()=>{
//                 laundry(()=>{
//                     sleep(()=>{
//                         console.log("task's finished")
//                     })
//                 })
//             })
//         })
    
//     })
// })

// as we can se above the code is growing horizontaly and this situation in js is called Callback Hell.
// this is one of the major cons of callbacks and another is Inversion Of Control.

// suppose we are trying to call an api or a function  by using callback.

//   api.createOrder(()=>{
//     api.orderPayment();
//   })

//   here we are trusting that the api.createOrder() will excute  and call our api.orderPayment().
// so this creates an issue that if callback is not called then api.orderPayment() will not be executed.
// this phenomena is called Inversion Of Control.
// TO resolve the cons of callbacks we can use Promises.
// Promises.
function walk(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Walked');
        },2000)
    })
   
}
function eat(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("finished eating");
        },1500)
    })
}
function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
           resolve("sleeped"); 
        },2500)
    })
}
// now by using pormise chaining:


// walk().then((value)=>
//     {console.log(value)
//     return eat()
//     }
// ).then((value)=>{
//     console.log(value)
//     return sleep()
//     }
// ).then((value)=>{
//     console.log(value)
//     console.log("finished all the tasks")   
// })


// Now by using promises we can resolve the issue of callback hell. Here the code will only grow vertically which provides more readablity.
// Now if any of the promises is not resolved due to some reason then we catch it using .catch().
function run(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('runnig completed');
        },2000)
    })
}
function drink(){
    const waterAvailble=false;
    return new Promise((resolve, reject) => {
        if(waterAvailble){
            setTimeout(()=>{
                resolve("finished drinking");
            },1500)
        }else{
            reject("Water not available")
        }
    })
}
function rest(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
           resolve("rest time fineshed"); 
        },2500)
    })
}
//here the waterAvailble is set to false and therfore that promise will be rejected.
run().then((value)=>{
    console.log(value);
    return drink();
}).then((value)=>{
    console.log(value);
    return rest();
}).then((value)=>{
    console.log(value)
    console.log("finished all tasks")
}).catch((error)=>{
    console.error(error);
    console.log("all tasks not finished")
})
// this will throw an error message since drink() is not completed.