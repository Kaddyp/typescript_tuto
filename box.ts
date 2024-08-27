// Arrays
let names = ['kalynai', 'kaddy', 'diyan']; //Define array we can not change type
names.push('AArvik');
// names.push(3);
// names[0] = 3;
// name = 'Kalynai'; // we can not change type of names 
let numbers = [10, 20, 30, 40];
// numbers.push('Dan');
// numbers[1] = 'Dan';

let mixed = ['kaddy', 4, 'diyan', 8, 10, true];
mixed.push('Dan');
mixed.push(9);
mixed[0] = 3;




// Objects
// When we define the object we can not add additional properties
let obj = {
    name: 'kalynai',        //property of type we can not change
    age: 24,
    isOnline: false
}
obj.isOnline = true;
obj.age = 40;
obj.name = 'DAN';
// obj.age= '40';
// obj.skills = ['NodeJS', 'ReactJS'];

obj = {
    name: 'Yoshi',
    age: 45,
    isOnline: true,
    //skills: ['NodeJS', 'ReactJS']         //error property should be same with data types
}