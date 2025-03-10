// primitive

//7 type : string, number, boolearn, null, undefined, symbol, Bigint


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id === anotherId);



// reference (Non primitive)

//Array, Objects, functions

const heros = ["noruto","one pish","sanjighu"];
let myObj={
    name: "maurya"
    age:19,
}

const myFunction = function(){
    console.log("hello world");
}
