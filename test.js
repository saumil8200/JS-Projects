// HOISTING In JavaScript
getName();
console.log(x);

console.log(getName);

var x = 7;
function getName() {
    console.log("HELLO");
}

getName();
console.log(x);

console.log(getName);