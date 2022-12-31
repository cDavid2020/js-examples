// Variables
// a variable is a containter for storing data
// a variable behaves as if it was the value that it contains

/* two steps
1. declaration (var, let, const)
2. assignment  (=) */

let firstName = "John"; //strings (letters only)
let age = 21; //numbers (numbers only)
let student = true; //boolean (true or false)

age = age + 1;

console.log(firstName);
console.log("hello")
console.log("Hello", firstName);
console.log("You are", age, "years old");

console.log("Enrolled", student);

document.getElementById("p1").innerHTML =

    //* to edit the html dom from within js like this */
    document.getElementById("p1").innterHTML = "Hello " + firstName;
document.getElementById("p2").innterHTML = "You are " age + " years old";
document.getElementById("p3").innterHTML = "Enrolled: " + student;

