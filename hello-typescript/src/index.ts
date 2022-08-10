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

const myFunc3 = (a: string, b: string, c: string = 'c'): string => {//return will be string type
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
sayHello({named: "Sakib", age: 30})