function Vehicle(model) {
  this.model = model; // Corrected assignment
}

function Car(model) {}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

var car = new Car("car");
console.log(car.model); // Output: car
