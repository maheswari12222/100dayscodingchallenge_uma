class Vehicle {
    constructor(speed) {
      this.speed = speed;
    }
  
    move() {
      console.log(`Moving at ${this.speed} km/h.`);
    }
  }
  
  class Car extends Vehicle {
    constructor(speed, fuelType) {
      super(speed); // Inheritance
      this.fuelType = fuelType;
    }
  }
  
  let myCar = new Car(120, 'Diesel');
  myCar.move(); 