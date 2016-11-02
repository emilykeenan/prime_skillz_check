// 1 - Assign the value 22 to a variable called sigma
var sigma = 22;

// 2 - Create a new variable called peeps and assign it the value of sigma
var peeps = sigma;

// 3 - Decrease the value of peeps by 1
peeps -= 1;

// 4 - Write a console log that checks if sigma is equal to peeps
console.log(sigma === peeps);

//Good! Best practice is to use ===, unless there is specific reason not to.
//That way you'll know if one of the numbers is accidentally a string.
