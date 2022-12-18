// array.map() = executes a provided callback function once for each array element, AND returns a new array with the results

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let square = numbers.map(square);
let cubes = numbers.map(cube);

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}

function print(element) {
  console.log(element);
}


