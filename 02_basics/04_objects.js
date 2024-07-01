//singleton : constructor

// const tinderUser = new Object() //singleton object
const tinderUser ={} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "arman"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "arman",
            lastname : "nandeshwar"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2) //merge  objects

const obj3 = {...obj1, ...obj2} //spread operator :latest
// console.log(obj3);


const users = [
    {
        id: 1,
        email : "h@gamil.com"
    },
    {
        id: 1,
        email : "h@gamil.com"
    },
    {
        id: 1,
        email : "h@gamil.com"
    }
]
// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //returns array of keys
// console.log(Object.values(tinderUser)); //returns array of values
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check if the object has that property


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

//course.courseInstructor

//object de-structure
const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);


//JSON FORMAT
// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

