// For of loops

// var catArray = [
//   'tabby', 
//   'british shorthair', 
//   'burmese', 
//   'maine coon', 
//   'rag doll'
// ];

// for (var cat of catArray){
//   console.log(cat, 'says meow');
// }

// For in loop
var catArray = [
  'tabby', 
  'british shorthair', 
  'burmese', 
  'maine coon', 
  'rag doll'
];

for (var cat in catArray){
  console.log(catArray[cat], 'says meow');
}


// Given a letter, print a diamond starting with ‘A’ with the supplied letter at the widest point.

// For example: print-diamond ‘C’ prints

//   A
//  B B
// C   C
//  B B
//   A