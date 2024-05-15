const accountId = 12345
let accountEmail = "mriganshu@gmail.com"
var accountPassword = "1223344"
accountCity = "Jamshedpur"
let accountState;

// accountId = 54321 // not allowed

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/
accountEmail = "mp@gmail.com"
accountPassword = "5544332211"
accountCity = "Haldia"

console.log(accountId)

console.table([accountEmail,accountPassword,accountCity,accountState])
