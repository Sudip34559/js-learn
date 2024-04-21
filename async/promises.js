// const promiseOne = new Promise(function (resolve, reject) {
//     // Do an async task
//     // DB calls, criptography, network

//     setTimeout(function () {
//         console.log("hello sudip");
//         resolve()
//     },1000)
// })

// promiseOne.then(function () {
//     console.log("promise conssumed");
// })

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("async task 2");
//         resolve()
//     }, 1000);
// }).then(function () {
//     console.log("async 2 resolved");
// })

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve({username:"sudip", email: "sudip@mail.com" })
//     }, 1000);
// })
// promiseThree.then(function (user) {
//     console.log(user);
// })


// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({username:"sudip", email: "sudip@mail.com" })
//         }else {
//             reject('ERROR')
//         }
//     }, 1000);
// })

// promiseFour
// .then(function (user) {
//     console.log(user);
//     return user.username
// })
// .then(function (username) {
//     console.log(username);
// })
// .catch(function (error) {
//     console.log(error);
// })
// .finally(function () {
//     console.log("promise is finally resilved or rejected");
// })


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username:"ram", email: "ram@mail.com" })
        }else {
            reject('ERROR')
        }
    }, 1000);
})

async function consumePromiseFIve() {
    try{const response = await promiseFive
        console.log(response);
    }catch(error){
      console.log(error)
    }
}

consumePromiseFIve()

// async function getAllUser() {
//    try{
//     const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await responce.json()
//     console.log(data);
//    }catch(error){
//     console.log("E:", error);
//    }
// }

// getAllUser()


fetch("https://jsonplaceholder.typicode.com/users")
.then(function (responce) {
    return responce.json()
})
.then((data) => {
    console.log(data);
})
.catch(() => console.log(error))