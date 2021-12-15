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

let mapFunction = studentMarks.map(function (mark) {
    return studentMarks.push(0)
})

console.log(mapFunction);


// let newMarksWithMap = studentMarks.map(n => n + 5)
let newMarksWithMap = studentMarks.map(n => n + 5);


let newMarksWithForeach = studentMarks.forEach(n => n + 5)


console.log(newMarksWithMap);
console.log(newMarksWithForeach);

// Filter in JavaScript

let moreStudentMarks = [10,21,14,4,5]

// Find all marks greater than 10

let marksGreaterThanTen = moreStudentMarks.filter(mark => mark > 0)

    // let marksGreaterThanTenWithMap = moreStudentMarks.map(mark => mark > 10 ? marksGreaterThanTenWithMap : '')

// console.log(marksGreaterThanTenWithMap)

let manyStudentMarks = [10,20,14,30,40,50,14]
let mark = manyStudentMarks.find(number => number == 14)
let marks = manyStudentMarks.filter(numberr => numberr > 14)

console.log(mark)
console.log(marks)

let newMark = manyStudentMarks.findIndex(mark => mark > 10)
console.log(studentMarks[newMark]);

let manyMoreStudentMarks = [10,20,3,4,8,0]

let markS = manyMoreStudentMarks.filter(numberi => numberi < 10)
console.log(markS)

let total = 0;
let totalLessThanTen = markS.map( mark => total += mark);
console.log(total);

let count = 0;
manyMoreStudentMarks.forEach((mark) => mark < 10 && (count += mark) )
console.log(count);











