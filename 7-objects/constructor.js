// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

function RightTriangle(side1, side2, base) {
  this.side1 = side1;
  this.side2 = side2;
  this.base = base;
  this.area = function(){
    return this.side1 * this.base / 2;
  }
  this.perimeter = function(){
    return this.side1 + this.side2 + this.base;
  };
}

//Good. Use the sides to be properties in the object
// and then have the methods use those properties in
// the calculations.

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.
var triangleOne = new RightTriangle(2, 5, 8);
var triangleTwo = new RightTriangle(8, 20, 9);

console.log(triangleOne.area());
console.log(triangleOne.perimeter());
console.log(triangleTwo.area());
console.log(triangleTwo.perimeter());
