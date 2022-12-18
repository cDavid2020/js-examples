// object = a group of properties and methods
//           properties = what an object has
//           methods = what an object can do
//            use . to access properties and methods    

//car 1
const car1 = {
    model: "mustang",
    color: "red",
    year: 2023,

    drive: function () {
        console.log("you drive the car");
    },
    brake: function () {
        console.log("you step on teh brakes");
    }
}

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);

//car 2
const car2 = {
    model: "corvette",
    color: "blue",
    year: 2024,

    drive: function () {
        console.log("you drive the car");
    },
    brake: function () {
        console.log("you step on teh brakes");
    }
}

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.drive();
car2.brake();

