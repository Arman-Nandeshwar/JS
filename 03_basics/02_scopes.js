// var c=300  //VAR BREACHES SCOPE
let a = 300
if(true){
    let a =10
    const b =20
    // var c = 30 //
    // console.log("INNER : ",a);
 }

//  console.log(a);
//  console.log(b);
//  console.log(c);


//inner function can access variables of outer function 
//but viceversa is not true
function one(){
    const username = "arman"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    //// console.log(website);
    two()
}
one()


 if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website  = "youtube"
        // console.log(username + website);
    }
    //// console.log(website);
 }

////  console.log(username);

//+++++++++++++++++++ interesting ++++++++++++++++
//two types of function declaration

console.log(addone(5));
function addone(num){
    return num+1
}




addtwo(5)
const addtwo = function(num){
    return num +2
}