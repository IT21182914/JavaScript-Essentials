// Assume Vehicle class has already been implemented
function Vehicle() {
  // Constructor logic for Vehicle
}

// Car class extending Vehicle
function Car() {
  // Constructor logic for Car
}

// Define a method getCar for Car prototype
Car.prototype.getCar = function () {
  console.log("Hello");
};
// Set Car prototype to be the same as Vehicle prototype
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
// Create a new instance of Car
const car = new Car();

// Call the getCar method on the car object
car.getCar();
