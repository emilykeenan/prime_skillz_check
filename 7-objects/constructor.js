// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

function RightTriangle(side1, side2, base) {
  this.area = function(){
    return side1 * base / 2;
  }
  this.perimeter = function(){
    return side1 + side2 + base;
  };
}

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.
var triangleOne = new RightTriangle(2, 5, 8);
var triangleTwo = new RightTriangle(8, 20, 9);

console.log(triangleOne.area());
console.log(triangleOne.perimeter());
console.log(triangleTwo.area());
console.log(triangleTwo.perimeter());
