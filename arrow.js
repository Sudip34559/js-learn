const user = {
    userName: "sudip",
    price: 999,

   wellcomeMessage: function() {
      console.log(`${this.userName}, welcome to website`);
    //   console.log(this);
      
   } 
}

// user.wellcomeMessage()

// user.userName = "sam"
// user.wellcomeMessage()

// console.log(this);

// function chai(){
//     let username1 = "sudip"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "sudip"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) =>  ({userName: "sudip"})


// console.log(addTwo(3, 4));


( function name(){
    console.log(`hello world`);
} )()
// ( () => {
//     console.log(`holl world`);
// } )()