//callback - a function passed as an argument to another function. callbacks ensure that a function is not going to run before a task is completed (when one function has to wait for another function) which helps to avoid errors, similar to a pause. callbacks are asynchronous code because they are not executed immediately.

//callback example 

let total = sum(2, 3);

function sum() {
    let result = x + y;
    return result
}

function displayConsole(output) {
    console.log("output");
}

//function to display output to the DOM
function displayDom(output) {
    document.getElementById("myLabel").innerHTML = output;

}

//another way to use 👆is w a callback function
sum(2, 3, displayConsole);

function sum(x, y, myFunction) { //renamed callBack to myFunction. you can rename parameters
    let result = x + y;
}

function displayConsole(output) {
    console.log("output");
}

//function to display output to the DOM
function displayDom(output) {
    document.getElementById("myLabel").innerHTML = output;


    //callback example
    cacheconsole.log("1");
    setTimeout() => {
        console.log("2");
    }, 1000);
    console.log("3");