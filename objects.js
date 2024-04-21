const mysym = Symbol("key1")
const user = {
    name: "sudip",
    age: 18,
    city: "haldia",
    email: "sudip@gmail.com",
    lastLoginDay: ["monday", "tuesday"],
    [mysym]: "key1"
}

// console.log(user.email)
// console.log(user["email"])
// console.log(user[mysym])


user.email = "sudip33@gmail.com"
// Object.freeze(user)
user.email = "sudip82@gmail.com"
// console.log(user)

user.greeting = function(){
    // console.log("hello js user")
}
user.greetingTow = function(){
    // console.log(`hello js user, ${this.name}`)
}


// console.log(user.greeting())
// console.log(user.greetingTow())

// const youtubeUser = new Object()

const youtubeUser = {}

youtubeUser.name = "sudip tunga"
youtubeUser.id = "123ab"
youtubeUser.email = "sudip@gmail.com"

// console.log(youtubeUser);

const user1 = {
  userName: {
        fullName:{
            firstName: "sudip",
            lastName: "tunga"
        }
    }
}
// console.log(user1.userName.fullName.firstName)

const obj1 = {
   a: 1, b: 2
}
const obj2 = {
    c: 1, d: 2
 }

//  const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const user2 = [
    {
        name2: "sudip",
        email: "sudip@gmail.com"
    },
    {
        name2: "sudip",
        email: "sudip@gmail.com"
    },
    {
        name2: "sudip",
        email: "sudip@gmail.com"
    }
]

// console.log(user2[1].name2)
// console.log(Object.keys(youtubeUser))
// console.log(Object.values(youtubeUser))
// console.log(Object.entries(youtubeUser))

// console.log(youtubeUser.hasOwnProperty("name"))

const course = {
    courseName: "js in Hindi",
    price: "999",
    teacher: "Hitesh"
}

const {price} = course
const {courseName: name5} = course

console.log(price)
console.log(name5)

