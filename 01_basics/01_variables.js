const accountId = 144553
let accountEmail = "arman@gamil.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState

// accountId = 2
console.log(accountId)

accountEmail = "aradsad@gamil.com"
accountPassword = "225566"
accountCity = "bengaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
