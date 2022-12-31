//EXAMPLE 1
// SORT AN ARRAY OF STRINGS
// think of it as a variable that can store multiple values

let fruits = ["apple", "orange", "banana"];

fruits = fruites.sort(); // sort the array of fruites
fruites = fruites.reverse(); // reverse the array of fruites

for (let fruite of fruite) {
  console.log(fruite);
}
console.log(fruites[3]);

fruites{
  2) = "cocunut";

  //fruite[2] = "cocunut";

  fruites.push("lemon"); // add an element
  fruits.pop(); // removes last element from beginning
  fruites.unshift("mango"); // add an element to the beginning
  fruites.shift(); // removes first element from beginning


  let length = fruites.length;
  let index = fruites.indexOf("banana");

  console.log('');

  

// EXAMPLE 2

let grades = [91, 85, 100, 92, 88];

grades = grades.sort(descendingSort);

grades.forEach(print);

function descendingSort(x,y)){
    return y - x;

}

function ascendingSort(x,y){
    return x - y;
}

function print(element){
    console.log(element);
}