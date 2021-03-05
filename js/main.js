console.log("hellooooo.......")

let b = 78

console.log(b);

let myarray = [0, 1, 10, 39, 4, 5, 6]
let names = ["kofi", "kwasi", "amma"]
let mymixed = [0, 4, 6, "yaw", "yam", "banana"]

console.log(myarray[2])
console.log(myarray[3])

myarray.push(50)

console.log(myarray)

myarray.pop()
console.log(myarray)
myarray.shift(0)
console.log(myarray)
myarray.splice()
console.log(myarray)
let name = names.map


let myobject = { name: "kofi", class: 3, classname: "Mary Gold" }
results: [
    { subject: "English", mark:14 }
]


//functions
function add(num1, num2) {
    console.log("Addition::" + ((num1 + num2)))
}
add(3,6)
add(8,9)
add(89,40)
function subtract(num1, num2) {
    console.log("Subtraction::" + (num1 - num2))
}
subtract(3,6)
subtract(8,9)
subtract(89,40)
function login(username, password) {
    console.log( username+"::" +password);
}
login('jesykadj','*******')
login ("allen","[[[[")

function multiply(num1,num2){
    return num1 * num2
}
console.log(multiply(5,6));

let ans=multiply(7,10)
console.log(ans);

document.write("<h1>Helllloooo</h1>")

//DOM Manipulation
let button = document.getElementById("button")

button.addEventListener('click',function(){

let username = document.getElementById("username")
let password = document.getElementById("password")
console.log(username.value);
console.log(password.value);

})


button.addEventListener('click',()=>{

    let username = document.getElementById("username")
    let password = document.getElementById("password")
    console.log(username.value);
    console.log(password.value);

})