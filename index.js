// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
        let perimeter = 0;
        for (let i = 0; i < this.sides.length; i++) {
          perimeter += this.sides[i];
        }
        return perimeter;
      
    }
  }
  
  class Triangle extends Polygon {
    constructor(sides) {
      super(sides);
    }
  
    get isValid() {
      if (this.countSides !== 3) {
        return false;
      }
  
      const [a, b, c] = this.sides;
      return a + b > c && b + c > a && c + a > b;
    }
  }
  
  class Square extends Polygon {
    constructor(sides) {
      super(sides);
    }
  
    get isValid() {
      if (this.countSides !== 4) {
        return false;
      }
  
      return this.sides.every((side) => side === this.sides[0]);
    }
  
    get area() {
      if (!this.isValid) {
        return null;
      }
  
      const [side] = this.sides;
      return side ** 2;
    }
  }

  
  
  
  