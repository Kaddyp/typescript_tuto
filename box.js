// explicit types
var charactor;
var age;
var isLoggedIn;
// age = 'xyz';
age = 30;
// charactor = 20;
charactor = 'xyz';
// arrays
var sugis = [];
//sugis = ['Sugisu', 'Gyoza', 'Sashimi'];
//sugis = [10, 20, 13];
sugis.push('Sugisu');
// union types
var mixed = [];
mixed.push('hello world');
mixed.push(20);
mixed.push(true);
console.log(mixed);
// union type on normal variable
var uid;
uid = '123';
uid = 123;
//uid= true; boolean not define in declaration
// objects
var sugiOne;
sugiOne = { name: 'kaddy', age: 30 };
var sugiTwo;
sugiTwo = { name: 'kaddy', age: 30, isLoggedIn: true };
