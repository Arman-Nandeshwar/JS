//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) : function which execute immediately : prevents global scope polllution

//normal function
function chai(){
    console.log(`DB CONNECTED`);
}
// chai()


//IIFE  : just enclose the function inside parenthesis
//NAMED IIFE
(function chai(){ 
    console.log(`DB CONNECTED`);
})(); //"; " is must to end iife


//iife with arrow function : UNNAMED IIFE
// (()=>{
//     console.log(`DB CONNECTED TWO`);
// })();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})("arman");

