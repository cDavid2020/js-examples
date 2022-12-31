/* variables - can either be 
    global scope - can be accessed within all of js file
    function scope - can only be accessed within the function {}*/


//CONST - block scoped constant

//LET - block scoped
// let - allows to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike var which defines a variable globally 


// VAR - function + global scope
var x = 1

x = 21

console.log(x);

///

//example of a variable outside the function

var name = "Ania"

function showAlert() {
    alert("hello " + name);
}

// showAlert();