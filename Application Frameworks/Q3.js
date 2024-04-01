function Vehicle(model) {
  this.model = model; // Corrected assignment
}

function Car(model) {} //since this constructor is empty, it is not necessary to define it.so its undefined

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

var car = new Car("car");
console.log(car.model); // Output: undefined
