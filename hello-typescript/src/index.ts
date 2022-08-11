import { Players1 } from "./class/players1.js";
//we export ts file ffile but import js file

let named = "Nazmus Sakib";
console.log(named);

// normal variable
let b: number | string;

let a:typeof b[] = [];
// named = 12;
a.push(2, "sakib")

let c: (number | string)[] = []; // | is called union

let myFunc: Function;

myFunc = (a: string, b: string) => {//a, b parameter type
    console.log("Type of function", a, b);
};

myFunc('a', 'b')

const myFunc1 = (a: string, b: string, c?: string) => {//c is a optional parameter
    console.log(c);
    console.log("Type of function", a, b);
};

myFunc1('a', 'b')

const myFunc2 = (a: string, b: string, c: string ='c') => {//c has default value
    console.log(c);
    console.log("Type of function", a, b);
};

myFunc2('a', 'b')

const myFunc3 = (a: string, b: string, c: string = 'c'): string => {//return will be string type, if no return than it means it will return void
    console.log(c);
    console.log("Type of function", a, b);
    return a + b;
};

let myFunc33 = myFunc3('a', 'b');
console.log(myFunc33);

//type allias
// to avoid redundancy we use common type that is called allias
type Usertype = {
    named: string,
    age: number
}
function sayhi(id: string | number, user: Usertype) { 
    console.log(`hello ${user.named}, age ${user.age}`);
}
const a1 = {
    named: "sakib",
    age: 30
}
sayhi(2, a1);

function sayHello(user: { named: string, age: number }) {
    console.log(`hello ${user.age > 50 ? "Sir": "Mr"} ${user.named}, age is ${user.age}`);
}
sayHello({ named: "Sakib", age: 30 })

//Function signature

//Declare type for function is called function signature
let add: (a: number, b: number)=> number;
add = (a: number, b: number) => {
    return a + b;
}
let add1 = add(2, 4);
console.log('function signature',add1);

let calc: (x: number, y: number, z?: string) => number;
calc = (a: number, b: number, c?:string)=>{ //optional parameter
    if (c=== 'add') {
        return a + b;
    }
    else if (c === 'minus') { 
        return a - b;
    }
    return a * b;
}
console.log("calc signature ", calc(2, 3, 'minus'));

let userInfo: (id: number | string, userDet: {
    name: string,
    age: number
}) => void;
userInfo = (id: number | string, userdet: {
    name: string,
    age: number
}) => {
    console.log(`The new id is ${id},
    He is ${userdet.age > 35 ? "Sir" : "Mr"} ${userdet.name}
    and he is ${userdet.age} years old`);
}
console.log("UserInfo", userInfo(13, {name: 'Sakib', age: 27}));

//Object type
//We can define typeb of object in typescript

class Players {
    name: string;
    age: number;
    country: string;
    constructor(a: string, b: number, c: string) { 
        this.name= a,
        this.age= b,
        this.country= c
    }
    play() { 
        console.log(`${this.name} is playing for ${this.country}`);
    }
}
const sakib75 = new Players("Sakib", 36, 'Bangladesh');
const afif = new Players("Afif", 22, 'Bangladesh');
console.log(sakib75.play());

//Type in aray
const arr: number[] = [];
arr.push(1);
arr.push(6);
console.log(arr);

//we can pass object type in array that we created
const arr1: Players[] = [];
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
