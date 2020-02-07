// callbacks exercises

const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter(x => x%2 > 0);

const filter = function(lst) {
  let x = [];
  for (const num in lst) {
    if (num % 2 > 0) {
      x.concat(num);
    }
  }
  return x;
};

const numbers = [1, 2, 3, 4, 5];
const odds = filter(numbers, x => x%2 > 0);
