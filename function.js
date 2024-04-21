function sayMyName (){
    console.log("s")
    console.log("u")
    console.log("d")
    console.log("i")
    console.log("p")
}

// sayMyName()


// function addTwoNumbar (number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbar (number1, number2){
    // let result = number1 + number2
    // return result 
    return number1 + number2
}

const result = addTwoNumbar(3, 4)
// console.log("result: ", result)


function loginUserMessage (userName){
    if(!userName){
       console.log("please enter a username")
       return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("sudip"))
// console.log(loginUserMessage())

function calculateCartPrise(...number1){
    return number1
}
// console.log(calculateCartPrise(200, 400, 500, 1000))


const user = {
    username: "sudip",
    price: 340
}

function handleObject(anyobject){
    return `Username is ${anyobject.username} and the price is ${anyobject.price}`
}

const objects = handleObject(user)
// console.log(objects);
// console.log(handleObject(user));

const myNewArray = [200, 500, 900]

function returnSecondValue(anyArray){
    return anyArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 900]));