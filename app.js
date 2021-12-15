console.log('Hello World');

var name = "Jenn"
var number = 3

console.log(number + name) 
// console.log(name)


//Algebra
let a = 12;
let b = 3;

a += 2;

let result = a % b;
console.log(result);

let studentMark = 20;

let studentResult = studentMark > 10 ? 'student passed' : studentMark == 10 ?  'student has average' : 'student failed';
// let studentResult = studentMark > 10 ? 'student passed' : 'student failed';
console.log(studentResult);

// Arrays
let numbers = [2,1,3,6];

let numbersResult = numbers.slice(1)

console.log(numbersResult)

let studentMarks = [1,2,3,4,5]

// let newMarksWithMap = studentMarks.map(n => n + 5)
let newMarksWithMap = studentMarks.map(n => n + 5);


let newMarksWithForeach = studentMarks.forEach(n => n + 5)

console.log















