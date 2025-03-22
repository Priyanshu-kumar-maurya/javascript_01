const name = "kumar"
const repoCount = 50

// console.log(name + repoCount + "value");

// console.log('hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('kumar')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newStrimg = gameName.substring(0,4)
console.log(newStrimg);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStrimgOne = "  kumar   "
console.log(newStrimgOne);
console.log(newStrimgOne.trim());

const url = "https://kumar.com/kumar%30choudhary"

console.log(url.replace('%30','-'))

console.log(url.includes('sunder'))

console.log(gameName.split('-')); 