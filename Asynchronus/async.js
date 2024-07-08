// Here we are looking async and await.
// So async await is another way to make asynchronous programming possible in js.
const p = new Promise((resolve,reject)=>{
    resolve("Hello JS");
})
  
// function displayPromise(){
//     p.then((value)=>{
//         console.log(value);
//     })
// }
// displayPromise();


// So this is normaly how we used to resolve promise using .then and .catch methods. Instead now we are using async await method.

async function displayPromise(){
   const res= await p;// Here the await keyword can only be used inside an async function , otherwise it will throw and syntax error.
   // Here the await keyword waits for the p to be resolved, whose value will then be put into res.
   console.log(res)
}
displayPromise();
// now let us consider a promise that will be resolved after a set amount of time.

const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("new Promise p1")
    },5000)
})

async function promiseChecker(){
    console.log("Promise P1 displaying")// this will be logged first since await is used after this.
    const p1value=await p1;
    console.log("Promise P1 displaying")// Normally this value will be logged first when the promiseChecker() is called.
    // But since we used await keyword this will only be printed after the p1 promise is resolved and setted to the p1value.
    console.log(p1value);
}
// promiseChecker();

// Now what if we used 2 promises.

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("new Promise p2")
    },2000)
})

async function promiseResolver(){
    const p1value=await p1;
    console.log("Promise P1 displaying")
    console.log(p1value);
    const p2value=await p2;
    console.log("Promise P2 displaying")
    console.log(p2value);
}

// Here p1 resolves at 5s and p2 resolves at 2s .In this case p2value will only be logged after p1value is logged,
// because js waits for p1value to be resolved which takes 5s. but p2 is already resolved before p1 but will only be logged after
// p1vlaue is logged, since js follows line by line execution.  

// if it's the other way around.

// async function promiseResolver(){
//     const p1value=await p2;
//     console.log("Promise P2 displaying")
//     console.log(p1value);
//     const p2value=await p1;
//     console.log("Promise P1 displaying")
//     console.log(p2value);
// }

// Here the p2value  will be logged first since it's reolved first, then p1 will be resolved later.
// promiseResolver();

// How to use fetch() in js. Using async await.

const API_URL = "https://api.github.com/users/Arunk-002"
const API_RANDOM_URL = "https://users/-ru"
 
async function userFetch(){
    const response = await fetch(API_URL);// The fetch() is browser method  which allows us to fetch data from a url.
    // The fetch() will always return a response which is basically a promise. This response will be a readable stream.
    const responseValue= await response.json();// This is done to resolve the response to a json() value.
    console.log(responseValue);
}
// userFetch();

// Now error handling in fetch()
// To handle error try catch block is used  
async function fetchData(){
    try{// In this the code that can produce possible error is put, which will stop execution when error occurs
        const response = await fetch(API_RANDOM_URL);// at this line since there occurs an error the handle is shifted directly to the catch block. 
        const responseValue = await response.json();
        console.log(responseValue);

    }catch(error){// this gets the error thrown in the try block which is logged to the console.
        console.log(error)// this logs the error to the console.
    }
}
fetchData()

