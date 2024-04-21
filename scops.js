let a = 300

if(true){
let a = 10
const b = 20
// console.log("INNER:", a);
}


// console.log(a);
// console.log(b);


function one(){
    const username = "sudip"
    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()


if (true) {
    const username = "sudip"
    if (true) {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


console.log(addOne(3));
function addOne(num){
   return num + 1
}

// addTwo(3)

// const addTwo = function(num){
//     return num + 2
// }