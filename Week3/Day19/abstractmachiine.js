class Car {
  constructor(model) {
    this.model = model;
    this.engineStatus = 'off'; // Private attribute
  }

  // Private method
  startEngine() {
    this.engineStatus = 'on';
    console.log('Engine started');
  }

  // Public method
  drive() {
    this.startEngine();
    console.log(`${this.model} is driving.`);
  }
}

let myCar = new Car('ModelX');
myCar.drive();
