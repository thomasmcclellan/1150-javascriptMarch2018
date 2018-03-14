// For in loops

// var student = { 
//   name:"Peter", 
//   awesome: true, 
//   degree: "JavaScript", 
//   week: 1 
// };

// for (var item in student) {
//    console.log(student[item]);
// }


// Challenge:
// Write a for in loop that capitalizes the first letter of a student's name

var studentName = 'kYle';
var capSN = '';

for (var n in studentName) {
  if (n == 0) {
    capSN = studentName[n].toUpperCase()
  } else {
    capSN += studentName[n].toLowerCase();
  }
}

console.log(capSN);