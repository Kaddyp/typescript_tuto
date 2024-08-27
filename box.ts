// explicit types
let charactor: string;
let age: number;
let isLoggedIn: boolean;

// age = 'xyz';
age = 30;

// charactor = 20;
charactor = 'xyz';




// arrays
let sugis: string[] = [];

//sugis = ['Sugisu', 'Gyoza', 'Sashimi'];
//sugis = [10, 20, 13];

sugis.push('Sugisu');


// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello world');
mixed.push(20);
mixed.push(true);
console.log(mixed);

// union type on normal variable
let uid: string|number;
uid = '123';
uid = 123;
//uid= true; boolean not define in declaration

// objects
let sugiOne: object;
sugiOne = {name: 'kaddy', age: 30};

let sugiTwo: {
    name: string,
    age: number,
    isLoggedIn: boolean
}

sugiTwo = {name: 'kaddy', age: 30, isLoggedIn: true};