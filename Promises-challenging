//Promises are a way to handle asynchronous code in a more elegant way than callbacks.
//Promises are one of the most important yet complicated concepts in JavaScript.


// promises = Object that encapsulates the result of an asynchronous operation
//            let asynchronous methods return values like synchronous methods
//            "I promise to return something in the future"

// 2 stages of promises
1. Pending
2. Then Fulfilled or Rejected

// The result is what can be returned
// 2 parts of a promise (Producing & Consuming)

// 1. Producing a promise
const promise = new Promise((resolve, reject) => {

  let fileLoaded = true;

  if(fileLoaded){
    resolve("File loaded successfully");

  }
  else{
    reject("File did not load successfully");
  }
});

// 2. Consuming a promise. It can do these 3 Things:
promise.then(doSomething) // a callback to a Function
promise.then(function()) // a Function expression
promise.then(() => {}); // an Arrow Function

// An Arrow Function example
promise.then((//arguments get listed inside the parentheses) => {});  

promise.then(value => {console.log(value));
});

// This👆prints👇this to the console
File loaded successfully



//EXAMPLE 2. wait 5 seconds then display a message

const promise = new Promise(resolve => {
  setTimeout(resolve, 5000);
});

promise.then();
// 👆you dont necessariy need to return a value when resolving so the above function 
promise.then( () => console.log("Thanks"));


//EXAMPLE 3. wait 5 seconds then display a message
const wait = new Promise(resolve => {
  setTimeout(resolve, 5000);
});
wait(3000).then(() => console.log("Thanks for waiting");)