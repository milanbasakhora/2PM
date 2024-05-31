// Javascript - Javascript is a very popular programming language.
// It is the core technology that is used in web development.

// 1. Variables
// 2. Functions
// 3. If ELSE (Conditions)
// 4. Loops
// 5. Arrays
// 6. Objects
// 7. DOM Manipulation (Document Object Model)

// 1. Variables - Container That holds a value.
// var, let, const

// Arrays
// let myValues = [1, 2, 3, 4, 5]

// Objects
// let myDetails = {
//     name: "Milan Basakhora",
//     address: "Dharan",
//     phone: "9836373773",
// }

// let a = 3;

// if (a > 5) {
//   console.log("Hello World!");
// } else {
//   console.log("Yohohoho");
// }

// Functions - It is a block of code that performs a specific task.

// Add Two Numbers
// function add(a, b){
//     return console.log(a+b);
// }

// add(10, 20);

// add(5, 10);

// add(6, 19);

// Loop - Repetitiona of the same operation.

// For Loop, For....of Loop, For...in Loop
// let arrays = [1, 2, 3, 4, "Milan"];
// 0 1  2   3    4

// for (let i = 0; i < arrays.length; i++) {
//   console.log(arrays[i]);
// }

// for (let monkey = 0; monkey < 10; monkey++) {
//   console.log(arrays[monkey]);
// }

// console.log("For...Of Loop");

// for (let a of arrays) {
//   console.log(a);
// }

// // For...In Loop
// let myObject = { name: "John Cena", age: 40, address: "US" };

// for (let obj in myObject) {
//   console.log(`${obj}:${myObject[obj]}`);
// }




// // DOM(Document Object Model) 

// let hello = document.getElementById("hello");

// let p = document.getElementById("paragraph")

// function changeContent(){
//     hello.innerText = "You Just Clicked The Button"
// }

// p.style.color = "yellow"



let p = document.getElementById("p");
let t = document.getElementById("t");
let r = document.getElementById("r");

let result = document.getElementById("result");


function simpleInterestCalculator(){
    let SI = p.value*t.value*r.value/100;
    result.innerText = "Simple Interest = " + SI;
}