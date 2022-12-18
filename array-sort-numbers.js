let grades = [91, 85, 100, 92, 88];



grades = grades.sort(descendingSort);

grades.forEach(print);

function descendingSort(x, y) {
    return y - x; //compares 2 values at at time
}

function ascendingSort(x, y) {
    return x - y; //compares 2 values at at time
}

function print(element) {
    console.log(element);
}