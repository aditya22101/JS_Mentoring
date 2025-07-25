const mySym = Symbol("key1");
const jsuser = {
    name: "Aditya",
     "full name": "Aditya Raj",
    [mySym]: "mykey1",
    age: 18,
    location: "Patna",
    email: "aditya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["full name"]);
console.log(typeof jsuser[mySym])
console.log(typeof mySym); 
console.log(jsuser[mySym]);
console.log(Object.keys(jsuser));        // ["name"]
console.log(Object.getOwnPropertySymbols(jsuser)); // [Symbol(id)]
jsuser.greet = function(){
    console.log("Namaste!")

}
jsuser.intro = function(){
    console.log('Hi Good to see you ${this.name}');
}
console.log(jsuser.greet());
console.log(jsuser.intro());