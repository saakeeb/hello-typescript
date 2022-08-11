//We are passing class blueprint
// this was first created for class type
export class Players1 {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing for ${this.country} whose age is ${this.age}`);
    }
}
//this one for interface type
//we have added IsPlayer interface using implements
export class Players2 {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    // we are accessing private age type by getProperty
    getProperty() {
        return this.age;
    }
    play() {
        console.log(` ${this.country} has a brand player name ${this.name}, age is ${this.age}`);
    }
}
