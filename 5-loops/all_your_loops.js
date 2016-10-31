// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;

for (var i = 0; i < 5; i++) {
  checkz++;
}

console.log(checkz);


// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
i = 0;
while (i < 3) {
  checkz -= 2;
  i++;
}
console.log(checkz);

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

/*
First, this code sets a variable called numbers. Inside of numbers is
an array containing the numbers 1-7. Then, it sets a variable called total.
Total is initially equal to 0.

Then, it sets up a for loop. In this for loop, the code takes each index of
numbers and adds it into the total. It runs through the entire array and then stops
when it reaches the last index of the array.
*/
