// Filter element

//array.filter() = creates a new array with all elements that pass the test provided by a function

let ages = [32, 33, 16, 19, 42, 85, 40];
let adults = ages.filter(checkAge);

adults.forEach(print);

// a function to to check age
function checkAge(element) {
  return element >= 18;
}

function print(element) {
  console.log(element);
}
