// For Loops

// for (var i =0; i < 10; i++) {
//   console.log(i);
// }

//Challenge: using a for loop, count to 20, by 2's

// // for (var i = 0; i <= 20; i += 2) {
// //   console.log(i);
// // }

// // var name = 'Kenn';

// // for (var i = 0; i < name.length; i++) {
// //   console.log(name[i]);
// // }

// // Challenge:
// // Use a for loop to iterate over a name
// // BUT in reverse


// // var name = 'Jared';

// // for (var i = name.length - 1; i >= 0; i--) {
// //   console.log(name[i])
// // }

// // Challenge: 
// // Make a for loop where you add up all the numbers from 1 to 50

// let total = 0;
// for (let i = 1; i <= 50; i++) {
//   total += i;
// }

// console.log(total);


// Challenge:
// FizzBuzz:
// Write a for loop;
// For multiples of 3, instead of the number, console.log "Fizz"
// For multiples of 5 console.log "Buzz";
// For numbers which are multiples of both 3 and 5, console.log "FizzBuzz".

var fb = 10;

if (fb % 3 == 0 && fb % 5 == 0) {
  console.log('fizzbuzz');
} else if (fb % 5 == 0) {
  console.log('fizz');
} else if (fb % 3 == 0) {
  console.log('buzz');
} else {
  console.log('nothing');
}

function fizzBuzz() {  
  for (var i = 1; i <= 100; i++) {
    if ( i % 3 == 0 && i % 5 == 0 ) {
      console.log('FizzBuzz');
    }
    else if ( i % 3 == 0 ) {
      console.log('Fizz');
    }
    else if ( i % 5 == 0 ) {
      console.log('Buzz');
    }
    else {
      console.log(i);
    }
  }
}

fizzBuzz();