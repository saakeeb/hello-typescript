export class Players1 {
    constructor(
        public name: string,
        private age: number,
        readonly country: string,
    ) { }

    play() {
        console.log(`${this.name} is playing for ${this.country} whose age is ${this.age}`);
    }
}