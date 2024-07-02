const user = {
    username : "arman",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`); //this used for current context
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


//BROWSER HAS GLOBAL OBJECT : WINDOW OBJECT
// console.log(this); //empty


// function chai(){
//     let username = "arman"
//     console.log(this.username);  //this will not work in functions but in objects only
// }
// chai()

// const chai = function (){
//     let username = "arman"
//     console.log(this.username);  //this will not work in functions but in objects only
// }
// chai()


//ARROW FUNCTIONS
const chai =  () => {
    let username = "arman"
    console.log(this);  //this will not work in functions but in objects only
}
// chai()

//basic arrow function :explicit return(we use return )
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }


//implicit return arrow function (we do not use return)
// const addTwo = (num1,num2) =>  num1 + num2
// const addTwo = (num1,num2) =>  (num1 + num2)

//returning object
const addTwo = (num1,num2) => ({username : "arman"})

// console.log(addTwo(3,4));