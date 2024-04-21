// if

if ( 2 == "2" ){
    // console.log("executed");
}

// <, >, <=, >=, ==, !=, ===

const tempreture = 29

// if (tempreture > 45) {
//     console.log("tempreture is greater then 45")
// } else{
//     console.log("tempreture is less then 45");
// }


const balance = 1000

// if (balance < 500) {
//     console.log("less then 500");
// } else if (balance < 750) {
//     console.log("less then 750");
// } else if (balance < 1200) {
//     console.log("less then 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
}

// Nullish colaescing operator (??): null undefind

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary operator

// condetion ? true : fals
const price = 200

// price >= 80 ? console.log("grater then 80") : console.log("less then 80");
