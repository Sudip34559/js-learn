//  dates 

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2006, 5, 2)
// let myCreatedDate = new Date(2006, 5, 2, 10, 3)
// let myCreatedDate = new Date("2006-6-2")
let myCreatedDate = new Date("2-6-2006")

// console.log(myCreatedDate.toLocaleString())


let tymeStamp = Date.now()
// console.log(tymeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

// console.log(myDate.getDay())
// console.log(myDate.getMonth()+1)


console.log(myDate.toLocaleString('defult', {
    weekday: "long",
}))