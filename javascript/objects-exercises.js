// Practice objects syntax stufffff

// Create an array of objects representing the courses you are taking this
// semester. Each course should have a subject (e.g. 'CS') and a number (e.g. 332).
// Iterate through this array to find the largest course number in your schedule.

const courses = [
  {subject: 'CS' num: 332},
  {subject: 'CS' num: 364},
  {subject: 'MATH' num: 217},
  {subject: 'SSES' num: 3002}
];

x = 0
for (let i=0; i < courses.length; i++) {
  if (courses.num > x) {
    x = courses.num
  }
}
console.log(x);


// Define a constructor function for Book objects. Each book should have a title
// and an array of authors. Define a shared method for books that lets you check
// whether a given author was one of the authors in this book.
const Book = function(title, authors) {
  this.title = title;
  this.authors = authors;
};

Book.prototype.authorss = function(name) {
  for (const auth of this.authors) {
    if (name === auth) {
      return true;
    }
  }
  return false;
};



// Define a function that works like the range function in Python. For example,
// range(5) returns [0,1,2,3,4] and range(3,8) returns [3,4,5,6,7].
const range = function(a, b) {

  let low = 0;
  let high = 0;

  if (a !== undefined && b !== undefined) {
    low = a;
    high = b;
  } else if (a !== undefined) {
    low = 0;
    high = a;
  }

  const array = [];
  for (let i = low; i < high; i++) {
    array.push(i);
  }

  return array;
};
