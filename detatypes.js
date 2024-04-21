// premitive 
// 7 types : String, Number, Boolean, Null, Undefind, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id == id2);


const bigNumber = 2345566534n


// reference (Non premitive)
// Array, Objects, Functions

const heros = ["spiderman", "ironman", "hulk"];
let myObj = {
    name1: "sudip",
    age: 22,
}

const myFunction = function(){
    console.log("hello world")
}


// stack(premitive), heap(non-primitive)

let myName = "sudip"

let newName = myName
console.log(myName)
console.log(newName)

newname = "sayandip"
console.log(myName)
console.log(newname)

let user1 = {
    name3: "sudip",
    email: "sudip@gmail.com"
}
let user2 = user1

user2.email = "ss@gmail.com"

console.log(user1.email)
console.log(user2.email)
