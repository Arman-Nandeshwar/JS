//for in

const myObjects = {
    js : 'javscript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

//for in loop on objects
for (const key in myObjects) {
    // console.log(key);
    // console.log(myObjects[key]);
    // console.log(`${key} shortcut is for ${myObjects[key]}`);
}


//for in loop on arrays

const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    // console.log(key);  //this gives direct key(index) only
    // console.log(programming[key]);  //this will give direct values 
}


// const map =  new Map()
// map.set('IN','India')
// map.set('USA','USAAAA')
// map.set('FR','france')

// for (const key in map) {
//     // console.log(key);  //nothing will happen as map is not iteratable
// }