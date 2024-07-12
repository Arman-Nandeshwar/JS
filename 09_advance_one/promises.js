//creating a promise

const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //Db calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve() //to connect resolve and promise
    },1000)
})

//then has a direct connection with resolve
promiseOne.then(function(){
    console.log("promise consumed");
    
})

//promise can be written without storing in a variable
//promise 2
new Promise(function(resolve,reject){
    setTimeout(function () {
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})


//promise 3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "chai", email : "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


//PROMISE FOUR
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=  false
        if(!error){
            resolve({username : "arman", password : "123"})
        }else{
            reject('Error : something went wrong')  //reject is used to give error
        }
    },1000)
})

const username = promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("the promise is either resolved or rejected"));


//promise 5
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=  true //false
        if(!error){
            resolve({username : "javascript", password : "123"})
        }else{
            reject('Error : JS went wrong') 
        }
    },1000)
})

//consuming promise using async await
async function consumePromiseFive(){ //this is a function
    try{
        const response =  await promiseFive //promise is an object
        console.log(response);
    }catch(error){ //used to handle error
        console.log(error)
    }
}
consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         //conversion to json takes time thus use await
//         const data  = await response.json() //converting the string to json
//         console.log(data);
//     }
//     catch(error){
//         console.log("E : ",error);
        
//     }
    
// }
// getAllUsers()


//same function using then catch
fetch('https://jsonplaceholder.typicode.com/users') //returns promise
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))

