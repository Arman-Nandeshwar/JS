//for of

const arr = [1,2,3,4,5]
for(const num of arr){
    // console.log(num)
}

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

//Maps : it is also an object in js ; unique values
//key- value pair
//remembers the original insertion orderof keys 

const map =  new Map()
map.set('IN','India')
map.set('USA','USAAAA')
map.set('FR','france')

// console.log(map);
for (const [key,value] of map) {  // "[]" square brackets is used to print the values separately
    // console.log(key, " : ", value);
}


const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}


//FOR OF LOOP CANNOT BE USED ON OBJECTS
// for(const [key,value] of myObject){
//     console.log(key , ":-" , value);
// }