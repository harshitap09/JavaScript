//const : constant variable [reassignment : no]
//let : understands scope [reassignment : yes]
// var : doesn't understand scope [reassignment : yes]

//"use strict" : treats all JS code as new version

const accountId = 7681
let accountFirstName = 'Harshita'
var accountLastName = 'Panwar'
accountType = 'Savings'

console.log("Account no : " + accountId + " Account Owner : " + accountFirstName + " " + accountLastName + " Account Type : " + accountType)

console.table([accountId, accountFirstName, accountLastName, accountType])