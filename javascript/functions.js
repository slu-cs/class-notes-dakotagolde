// Function syntax

// Functioning definition
const avg = function(a, b) {
  return (a + b) / 2;
};

// Function call
console.log(avg(5, 6));

// Another definition
const print = function(a, b) {
  console.log(`a=${a}, b=${b}`);
};

// Undefined values
const result = print(7, 8);
console.log(result);    // should be Undefined
print(9);
print();
