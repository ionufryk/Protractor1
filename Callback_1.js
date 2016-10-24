function someAction(x,y, callback){
    return callback(x,y);
}

function random_number(x, y) {
    var my_number = Math.ceil(Math.random() * (x - y) + y);
    return(my_number);
}

function divide_numbers(x, y) {
    if (y != 0) {return x/y;}
    else {return "Error. Division by zero"};
}

// Input data
var parms = [5, 15, 5, 0, 1, 5];

console.log(someAction(parms[0], parms[1], random_number));
console.log(someAction(parms[2], parms[3], divide_numbers));
console.log(someAction(parms[4], parms[5], divide_numbers));

