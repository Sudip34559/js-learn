const user = {
    username: "sudip",
    loginCount: 8, 
    signedIn: true,

   GetUserDetails: function () {
    // console.log("hello i am sudip");
    // console.log(`username: ${this.username}`);
    console.log(this);
   }
}
// console.log(user.GetUserDetails());
// console.log(this);


function Users(Username, LoginCount, SignedIn) {
    this.Username = Username
    this.LoginCount = LoginCount
    this.SignedIn = SignedIn
    this.Greetings = function () {
        console.log(`${this.Username}`);
    }
   return this
}

const userOne = new Users("sudip", 12, true);
const userTwo = new Users("rahul", 18, false);

// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);
