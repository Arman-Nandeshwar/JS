const name = "arman"
const repoCount = 50

// console.log(name + repCount + " value ");

//string interposition(modern way)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =  new String('arman-nn-hello') //object

// console.log(gameName[0]);
// console.log(gameName.__proto__); //we can use any method of proto directly

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
console.log(newString);

// const anotherString = gameName.slice(0,4)
const anotherString =  gameName.slice(-7,3) //can give -ve values in this
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "arman%20nandeshwar"
console.log(url.replace('%20','-'));
console.log(url.includes("ar"));

console.log(gameName.split('-'));