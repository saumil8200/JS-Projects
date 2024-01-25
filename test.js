// HOISTING In JavaScript
// getName();
// console.log(x);

// console.log(getName);

// var x = 7;
// function getName() {
//     console.log("HELLO");
// }

// getName();
// console.log(x);

// console.log(getName);

// let a = 100;
// {
//     let a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    y();
}
x();