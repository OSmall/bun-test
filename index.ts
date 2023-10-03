interface Person {
    name: string,
    age: number,
    options: object,
}

let p: Partial<Person> = {

};

console.log(p);
console.log("Hello via Bun!");


/** 
 * Testing options object design pattern
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters#destructured_parameter_with_default_value_assignment}
*/
function foo(id: string, { displayName = id } = {}) {
    displayName = displayName.replace('or', 'i');
    console.log(displayName);
}

foo('hello');
foo('hello', { displayName: 'world' });