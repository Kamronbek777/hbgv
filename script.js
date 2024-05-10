let string = prompt("Enter string type");
let number = +prompt("Enter number type");
let boolean = prompt("Enter boolean type");
let message = confirm("Are you sure that you entered everything correctly?");

console.log(string, number, boolean);
console.log(message);
console.log();("1 is", typeof(string), "2 is", typeof (number), "3 is", typeof Boolean(boolean));
// console.log("1 is", typeof(string), "2 is", typeof (number), "3 is", typeof Boolean(boolean));