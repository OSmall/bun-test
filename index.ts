interface Person {
    name: string,
    age: number,
    options: object,
}

let p: Partial<Person> = {

};

console.log(p);
console.log("Hello via Bun!");