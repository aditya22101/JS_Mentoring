let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toLocaleString());
let mycreatedate = new Date(2025, 6 , 25)
console.log(mycreatedate.toDateString());
console.log(Math.floor(Date.now()/1000));
mydate.toLocaleString('default',{
    weekday: "long"
})
console.log(mydate);