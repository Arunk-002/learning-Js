console.log("HOF(Higher Order Functions)-------------------------------------------------------");
// So in normal languages we cannot pass a function inside a function.Like:

function name(params) {
    console.log(params)
}
// The above function is a example of a noraml function. But in js we can pass function() as parameters into a function.
// This type of functions in js is known as HOF(Higher Order Functions).

function hello(){
    console.log("Hello");
}

function world(fun){
    fun();
    console.log("World");
}
world(hello);

// So this will log Hello World in console. Here we are passing hello() as a parameter to the world().
// Normally HOF concept is used in callbacks. The above is an example of callback also , since we want to log "Hello World"
// We are  trying to call the functions in a order. 
let array=[1,2,3,4,5];
function filterNumbers(arr,test) {
    let outArray=[];
    for(let i=0; i<arr.length;i++){
       outArray.push(test(arr[i]));
    }
    console.log(outArray);
}
function elementSquare(num){
    return num*num;
}
filterNumbers(array,elementSquare);
// The above is an implementation of HOF.

console.log("-------------------------------------------------------------------------------------------------");