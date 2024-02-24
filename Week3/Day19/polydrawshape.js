class Shape {
    draw() {
      return "I am just a generic shape";
    }
  }
  
  class Circle extends Shape {
    draw() {
      return "I am a circle";
    }
  }
  
  const shapes = [new Shape(), new Circle()];
  shapes.forEach(shape => {
    console.log(shape.draw());
  });
 