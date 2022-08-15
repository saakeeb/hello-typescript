import { Players1, Players2 } from "./class/players1.js";
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
function drawRectangle(option) {
    let width = option.width;
    let length = option.length;
    return width * length;
}
let DrawOption = {
    width: 30,
    length: 20,
    height: 40
};
console.log("Ractangle", drawRectangle(DrawOption));
// there is a player object
// player2 is coming from class module
let sakib2;
// we are creating object from Players2 object and IsPlayer interface type
sakib2 = new Players2("Sakib", 36, 'Bangladesh');
const afif2 = new Players2("Afif", 22, 'Bangladesh');
// sakib1.name = "6"
console.log(sakib2.play());
//We are creating arr from IsPlayer interface type
const playersArr = [];
playersArr.push(sakib2, afif2);
console.log(playersArr);
// Generics
// When we try to pass object as a parameter then we can assign generics value to show all object value to assign
const addId = (obj) => {
    const id = Math.floor(Math.random() * (100 - 50) + 50);
    return Object.assign(Object.assign({}, obj), { id });
};
const user = addId({
    name: "sakib1",
    age: 36
});
// user.id
console.log("generics", user);
const addId2 = (obj) => {
    //it will receive string number, obj any generic type, but we only want obj 
    const id = Math.floor(Math.random() * (100 - 50) + 50);
    return Object.assign(Object.assign({}, obj), { id });
};
const user2 = addId2({
    name: "sakib1",
    age: 36
});
const user21 = addId2("Sakib");
console.log("generics2", user2, user21);
const addId3 = (obj) => {
    const id = Math.floor(Math.random() * (100 - 50) + 50);
    return Object.assign(Object.assign({}, obj), { id });
};
const user3 = addId3({
    name: "sakib1",
    age: 36,
    country: "Bangladesh"
});
console.log("generics3", user3);
const addId4 = (obj) => {
    //
    const id = Math.floor(Math.random() * (100 - 50) + 50);
    return Object.assign(Object.assign({}, obj), { id });
};
const user4 = addId4({
    name: "sakib1",
    age: 36,
    country: "Bangladesh"
});
console.log("generics4", user4);
const apiReq = {
    name: 'API',
    status: 200,
    data: "data"
};
const apiReq1 = {
    name: 'API',
    status: 200,
    data: {
        data1: 'data1'
    }
};
//Enum
//Optional data type 
var rRes;
(function (rRes) {
    rRes[rRes["success"] = 0] = "success";
    rRes[rRes["failure"] = 1] = "failure";
    rRes[rRes["unauthenticate"] = 2] = "unauthenticate";
    rRes[rRes["forbidden"] = 3] = "forbidden";
})(rRes || (rRes = {}));
const apiReq2 = {
    name: 'API',
    status: rRes.forbidden,
    data: "data"
};
console.log("enum", apiReq2);
//Tuples
// we use it in fixed array, where we have to maintain array index type.
//it is special case we can not add or remove from array
//We can assign number in number type
const arrTuples = [2, 'Sakib', { name: 'sakib' }];
console.log("Tuples", arrTuples);
