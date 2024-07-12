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

//AJAX & JSON
console.log("AJAX & JSON----------------");

// So AJAX  is Asynchronus Javascript and XML. This is used to send and an HttpRequest to a api and and get data in return.THis is done by creating a XMLHttpReuest object.
// and by accessing the built in methods of that object. AJAX helps to load data to the webpage without a refresh or reload of the website.


// So Json is basically a data representaion format used for sharing large quantity of data. It is commonly used in API's and Config files.
// It's Lightweight and integerates easily with almost all languages.


// The followning is an example of implementing ajax using XMLHttpReuest.
function generate(){
    const pokename=document.getElementById("text-field").value.toLowerCase();
    showPokemon(pokename);
}
// function showPokemon(pokename) {
//     let xhr = new XMLHttpRequest() 
//     xhr.open('GET',`https://pokeapi.co/api/v2/pokemon/${pokename}`,true);
//     xhr.onload=function(){
//         if (xhr.status==200) {
//             let pokedata= JSON.parse(xhr.response); // This is  used to convert the readable string to a json format.
//             let dDiv=document.getElementById("poke-img");
//             dDiv.src=pokedata.sprites.front_default;
//             console.log("sucess",pokedata.sprites.front_default);
//         } else {
//             console.log("Error occured :Invalid name")
//         }
//     }
//     xhr.send()
// }

async function showPokemon(pokename) {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
        if (response.status==200) {
            let pokedata= await response.json();// This is  used to convert the readable string to a json format.
            let dDiv= document.getElementById("poke-img");
            dDiv.src=(pokedata.sprites.front_default);
        } else {
            throw new Error("couldnot fetch resources");
        }
    } catch (error) {
        console.error(error);
    }
    

}
// JSON.stringify(obj) is used to convert a obj into string, so that it can be sent across web.
const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
console.log(myJSON)
// This will convert the obj into a string.