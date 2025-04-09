//Date 

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreated = new Date(2025, 2, 28)
// console.log (myCreated.toDateString());
// let myCreated = new Date(2025, 2, 28, 8, 30)
// console.log (myCreated.toLocaleString());
// let myCreated = new Date("2025-03-28")
let myCreatedDate = new Date("03-18-2025")
// console.log (myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

newDate.toLocaleDateString('default',{
    weekday: "long",
})