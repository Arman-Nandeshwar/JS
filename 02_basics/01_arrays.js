//arrays : object : js arrays are resizable
//JS copy operations create shallow copies

const myArr = [0,1,2,3,4]
const myHeros = ["shaktiman","ironman"]

const myArr2 = new Array(1,2,3,4);
console.log(myArr[1]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9) //adds the element in the start
// myArr.shift() //remove first element

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

const newArr = myArr.join() //converts the array elements into string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);



//SLICE AND SPLICE
console.log("A",myArr);

//slice : does not change the original array , returns only array between range
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

//splice : change the original array 
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);


