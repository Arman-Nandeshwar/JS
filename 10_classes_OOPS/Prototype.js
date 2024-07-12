// let myName = "arman"
// let myChannel = "chai"

// console.log(myName.trueLength);

let myHeros = ["thor","spiderman"]
let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spider power is ${this.spiderman}`);   
    }
}

Object.prototype.arman = function(){
    console.log(`arman is present in all objects`);   
}

Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);
}

// heroPower.arman()
myHeros.arman()
myHeros.heyHitesh()
// heroPower.heyHitesh()

//INHERITANCE
const User = {
    name : "chai",
    email : "chai@google.com"
}
const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

//modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)  //Teaching support can access the properties of teacher


let anotherUsername = "chaiAurCode  "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"arman".trueLength()
"iceTEa".trueLength()