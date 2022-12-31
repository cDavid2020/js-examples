
//Copy an array
const copy = dinosaurs.slice();

const copy = [...dinosaurs];
//called a spread operator, think of it as a way to copy two Things and spread all the contents...dinosaurs


// Add a dinosaur to a list

const newDino = 'T-Rex';

dinosaurs.push(newDino);

const updated = [...dinosaurs, newDino];

