const user = "sudip"

if (user) {
    console.log(`hello ${user}`);
} else{
    console.log("hello user");
}

// false values
// fals, 0, -0, BigInt 0n, null, undefined, Nan

// truethy values
// "0", "false", "", [], {}, function(){}

let name1 = []

if (name1.length === 0) {
    console.log("Array is empty");
}

let name2 = {}

if (Object.keys(name2).length === 0) {
    console.log("Object is empty");
}