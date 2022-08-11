import { Players1 } from "./class/players1.js";
//we export ts file ffile but import js file
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
//Function signature
//Declare type for function is called function signature
let add;
add = (a, b) => {
    return a + b;
};
let add1 = add(2, 4);
console.log('function signature', add1);
let calc;
calc = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else if (c === 'minus') {
        return a - b;
    }
    return a * b;
};
console.log("calc signature ", calc(2, 3, 'minus'));
let userInfo;
userInfo = (id, userdet) => {
    console.log(`The new id is ${id},
    He is ${userdet.age > 35 ? "Sir" : "Mr"} ${userdet.name}
    and he is ${userdet.age} years old`);
};
console.log("UserInfo", userInfo(13, { name: 'Sakib', age: 27 }));
//Object type
//We can define typeb of object in typescript
class Players {
    constructor(a, b, c) {
        this.name = a,
            this.age = b,
            this.country = c;
    }
    play() {
        console.log(`${this.name} is playing for ${this.country}`);
    }
}
const sakib75 = new Players("Sakib", 36, 'Bangladesh');
const afif = new Players("Afif", 22, 'Bangladesh');
console.log(sakib75.play());
//Type in aray
const arr = [];
arr.push(1);
arr.push(6);
console.log(arr);
//we can pass object type in array that we created
const arr1 = [];
arr1.push(sakib75);
arr1.push(afif);
console.log(arr1);
// access modifier
// we can access only public mode outside of class
//private mode only accessible within class
//object is available for read only
// to short-cut we can put access modifier to constructor parameter so that we it will well organise,
//this short cut is available for explicit access modifier,
//if explicit modifier is missing then shortcut will not work
//
// class Players1 {
//     constructor(
//         public name: string,
//         private age: number,
//         readonly country: string,
//     ) {}
//     play() {
//         console.log(`${this.name} is playing for ${this.country} whose age is ${this.age}`);
//     }
// }
//
const sakib1 = new Players1("Sakib", 36, 'Bangladesh');
const afif1 = new Players1("Afif", 22, 'Bangladesh');
// sakib1.name = "6"
console.log(sakib1.play());
//we can easily import/export type so that we can keep  the structure clean
//there is proble in here, multiple file is invoke here, and cause performance issues.
//to solved this we use webpack, but typescript does not help on this
//another problem is that there is old browser supporting issues
