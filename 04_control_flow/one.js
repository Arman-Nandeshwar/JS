//if

// const temperature = 41

// if(temperature === 41){
//     console.log("less than 50");
// }
// else{
//     console.log("temp greater than 50");
// }

//<,>,<=,>=, == , != , === ,!==


// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`);


//if (balance >500) console.log("test"),console.log("test2");

// const balance  = 1000
// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("lesst than 750");
// }
// else if(balance < 900){
//     console.log("lesst than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(userLoggedIn && debitCard){
    console.log("allowed to buy courses");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}