// Dynamic Types

let age: any = 25;

age = true;
console.log(age);
age = 'hello world';
console.log(age);
age = {name: 'John'}
console.log(age);

let mixed: any[] = [];

mixed.push(25);
mixed.push('hello');
mixed.push(true);

let sugi: {name: any, age: any};
sugi = {name: 'kaddy', age: 30};
console.log(sugi);