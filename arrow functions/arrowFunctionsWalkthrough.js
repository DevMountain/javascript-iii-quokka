// * arrow functions
// one line Arrow functions 

function add(x, y){
    return x + y;
} // Is the same as

var add = (x, y) => x + y;
var sum = add(3, 2)
sum;

//One line Arrow functions 
// - remove need for curly braces
// - automatically return your line of code
// - Can only do 1 line of code

//multi line arrow functions
var add = (x, y) => {
    x = x;
    y = y;
    return x + y;
}
var sum = add(3, 8)
sum;

//multi line Arrow functions 
// - Use curly braces
// - Still need a return statement
// - Can do many lines of code
