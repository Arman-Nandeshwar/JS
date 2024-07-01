//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate =  new Date(2023,0,23) //month start from 0
// console.log(myCreatedDate.toDateString());

// let myCreatedDate =  new Date(2023,0,23,5,3)
let myCreatedDate =  new Date("01-14-2023")
// let myCreatedDate =  new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //gives current date
// console.log(myTimeStamp); //in millisecond
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); //in seconds

let newDate =  new Date()
console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
})