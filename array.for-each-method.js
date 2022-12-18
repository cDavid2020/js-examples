//array.forEach() = executes a provided function once for each array element

let students = ["john", "mary", "peter", "jane", "mark"];

function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
}
});

capitalizconsole.log(students[0]);