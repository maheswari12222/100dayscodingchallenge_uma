class Vehicle {
    constructor(wheels) {
      this.wheels = wheels;
    }
  
    displayWheels() {
      console.log(`This vehicle has ${this.wheels} wheels.`);
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model) {
      super(4); 
      this.make = make;
      this.model = model;
    }
  }
  
  const myCar = new Car('Honda', 'Civic');
  myCar.displayWheels(); 