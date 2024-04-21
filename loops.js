// for

for (let i = 0; i <= 10; i++) {
    const element =i;
    // console.log(element);
    if (element == 5) {
        // console.log("5 is best numbert");
    }
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value: ${j} respect to outer loop value: ${i}`);
    }
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
       if (i > 0 & j> 0) {
        value = `${i}*${j} = ${i*j}`
        // console.log(value);
       }
    }
    
}

let myArray = ["ironman", "spiderman", "dethpool"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// break and continue

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        // console.log("detected 5");
        break
    }
    // console.log(index);

}
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        // console.log("detected 5");
        continue
    }
    // console.log(index);

}

// while

let index = 10
while ( index <= 100 ) {
//    console.log(index); 
   index = index + 10
}

let newArray = ["ironman", "spiderman", "dethpool"]

let i = 0
while (i < myArray.length) {
    console.log(myArray[i]);
    i = i + 1
}

// do while

let score = 1
do {
    // console.log(`score is ${score}`);
    score = score + 1
} while (score <= 10);

//  for of

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}
const name1 = "sudip tunga"
for (const i of name1) {
    
 if (i == " ") {
    continue
 }
//  console.log(`Each char is ${i}`);
}

// maps

const map = new Map()
map.set('en', "english")
map.set('ben', "begali")
map.set('hin', "hindi")

// console.log(map);

for (const [key, value] of map) {
    // console.log( key, ':-', value);
}
for (const key in map) {
    console.log(key);
}

const myObject = {
    en: "english",
    ben: "bengali",
    hin: "hindi"
}

for (const lan in myObject) {
    // console.log(`${lan} valu is ${myObject[lan]}`);
}

 const name3 = ['sudip','sayandip','rahul','sujoy']

 for (const key in name3) {
    //    console.log(name3[key]); 
 }

//  for each

const name4 = ['sudip','sayandip','rahul','sujoy']

name4.forEach( function (item){
    // console.log(item);
} )
name4.forEach(  (item) => {
    // console.log(item);
} )

function printme(item) {
    // console.log(item);
}
name4.forEach(printme)

name4.forEach( (item, index, array) => {
    //   console.log(item, index, array);
})

const newUser = [
    {
        userName: "sudip",
        email: "sudip@gmail.com"
    },
    {
        userName: "rahul",
        email: "rahul@gmail.com"
    },
    {
        userName: "sayandip",
        email: "sayandip@gmail.com"
    }
]

newUser.forEach( (item) => {
    // console.log(item.email);
})


const newNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const myNum = newNum.filter( (num) => {
//    return num > 4
// } )
// console.log(myNum);

const myNum = []

newNum.forEach( (num) => {
if (num > 4) {
    myNum.push(num)
}
} )
// console.log(myNum);


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const num = number.map( (num) => {
    return num + 10
})
// console.log(num);

const num2 = number.map( (num) => num * 10 )
                   .filter( (num) => {
                    return ((num/8) > 5) && (num % 3 === 0)
                    } )
// console.log(num2);

const total = number.reduce( (acc, currval) => {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0 )
// console.log(total);

const userProduct = [
    {
        userName: "sudip",
        productPrice: 2999
    },
    {
        userName: "rahul",
        productPrice: 999
    },
    {
        userName: "sayandip",
        productPrice: 4999
    }
]

const totalPrice = userProduct.reduce( (acc, user) => acc + user.productPrice, 0 )
// console.log(totalPrice);