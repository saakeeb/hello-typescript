"use strict";
let named = "Nazmus Sakib";
console.log(named);
// normal variable
let b;
let a = [];
// named = 12;
a.push(2, "sakib");
let c = []; // | is called union
let myFunc;
myFunc = (a, b) => {
    console.log("Type of function", a, b);
};
myFunc('a', 'b');
const myFunc1 = (a, b, c) => {
    console.log(c);
    console.log("Type of function", a, b);
};
myFunc1('a', 'b');
const myFunc2 = (a, b, c = 'c') => {
    console.log(c);
    console.log("Type of function", a, b);
};
myFunc2('a', 'b');
const myFunc3 = (a, b, c = 'c') => {
    console.log(c);
    console.log("Type of function", a, b);
    return a + b;
};
let myFunc33 = myFunc3('a', 'b');
console.log(myFunc33);
function sayhi(id, user) {
    console.log(`hello ${user.named}, age ${user.age}`);
}
const a1 = {
    named: "sakib",
    age: 30
};
sayhi(2, a1);
function sayHello(user) {
    console.log(`hello ${user.age > 50 ? "Sir" : "Mr"} ${user.named}, age is ${user.age}`);
}
sayHello({ named: "Sakib", age: 30 });
