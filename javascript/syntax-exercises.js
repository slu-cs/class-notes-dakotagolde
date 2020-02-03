// print the sum of squares of the integers from 1 to 10
let s = 0;
for (let x = 1; x < 11; x++) {
  s += x*x
}
console.log(`The sum of the sqaures from 1 to 10 is ${s}`);

// Print the first Fibonacci number that is greater than 1000
let x = 1;
let y = 1;
while (y < 1000) {
  let z = y;
  y = x + y;
  x = z;
}
console.log(`The first Fibonacci number thats greater than 1000 is ${y}`);

// Print the number of integers from 1 to 100 that are divisible by 3 or 5 but not both
for (let x = 1; x < 101; x++) {
  if (x % 3 === 0) {
    if (x % 5 !== 0) {
      console.log(`${x} is divisible by 3`);
    }
  }
  else if (x % 5 === 0) {
    console.log(`${x} is divisible by 5`);
  }
}

// Print the smallest integer that is divisible by all the integers from 1-10
let x = 11;
let c = true;
while c {
  if c === true {
    for (let y = 1; y < 11; y++){
      if (x % y !== 0) {
        c = true
      } else {
        c = false
      }
    }
  }
}
