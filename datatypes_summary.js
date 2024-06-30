//  primitive datatypes : call by value
//7 types : String , Number, Boolean , null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp  =null
let userEmail;

const id = Symbol('123')
const anotherID  =Symbol('123')
// console.log(id === anotherID);

//reference (non primitive datatypes)
//Arrays, Objects, Functions

const heros = ["shaktiman","hero","doga"];

let myObj = {
    name : "arman",
    age  :21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

