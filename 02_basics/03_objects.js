//if object made from constructor : singleton
//Object.create



// if object made from literals : then not singleton
//object literals

const mySym  = Symbol("key1") //symbol

const JsUser = {
    name: "arman",
    "full name" : "nandeshwar",
    age: 18,
    [mySym] : "mykey1", //to use symbol as symbol
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday","Saturday"]
}

//ACCESSING THE OBJECT VALUES
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "amrna@njkdnks.com" //changing the values

// Object.freeze(JsUser) //lock the object so that no one can change the data

JsUser.email = "armasnk@ksdfnk.jdjjs"
// console.log(JsUser);


//functions in objects
JsUser.greetings  = function(){
    console.log("Hello Js User");
}
// console.log(JsUser.greetings());
// console.log(JsUser.greetings); //returns reference of functions

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo());