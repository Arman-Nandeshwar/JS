//for each

// ["" , "", ""]
// [{},{},{}]

const coding = ["js","ruby","java","python","cpp"]
//callback function does not have name 
// coding.forEach( function (item){  //callback function is passed to the loop
//     console.log(item);
// } )

//callback function  : arrow function
// coding.forEach((item) => {
//     console.log(item);
// })


//passing function to for each
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach((item, index ,arr) => {
//     console.log(item, index ,  arr);
// })


//IMP
const myCoding = [  //array of objects : imp
    {
        languageName : "javascript",
        languageFIleName : "js"
    },
    {
        languageName : "java",
        languageFIleName : "java"
    },
    {
        languageName : "python",
        languageFIleName : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})