function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,null)

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3,5)
// console.log("Result : ",result);


function loginUserMessage(username = "sam"){  //passing default value
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("arman"));
// console.log(loginUserMessage());


// function calculatecartprice(...num1){ //rest operator : passing multiple operator to the functions
    // return num1
// }
// console.log(calculatecartprice(200,400,500));



function calculatecartprice(val1,val2,...num1){ //rest operator : passing multiple operator to the functions
    return num1
}
// console.log(calculatecartprice(200,400,500,2000));

const user = {
    username : "arman",
    price : 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username : "sam",
    price : 399
})



//passing arrays 
const myNewarray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewarray));
console.log(returnSecondValue([200,400,500,1000]));