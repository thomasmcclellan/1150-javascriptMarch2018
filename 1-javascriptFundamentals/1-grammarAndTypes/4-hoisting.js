// Hoisting

// JS puts variables and functions at the top of your code, it stores the vars and funcs before it runs them

// x = 5;

// console.log(x);
// var x;

// function myfunc() {

// }

// x = 10;
// console.log(x)


// x = 5;
// y = 10;

// console.log(x + y);


// var y
// var x


console.log(first())
var second = function () {
    return 'Did not get hoisted!'
}
function first() {
    return 'Just got hoisted!'
}

console.log(second());
