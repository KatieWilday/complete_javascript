//let and const
//let can be changed, const cannot be reassigned
//block scoped

/*
const n = 5

for(let i = 0; i < n; i++) {
  let btn = document.createElement("button")
  btn.appendChild(document.createTextNode("Button " + i))
  btn.addEventListener("click", function(){
    console.log(i)
  })

  document.body.appendChild(btn)
}
*/

//Blocks and IIFE
/*
{
  const a = 1
  let b = 2
  var c = 3 //function scoped not block scoped
}
//console.log(a + b)
console.log(c)

//strings in ES6

let firstName = "Katie"
let lastName = "Wilday"
const yearOfBirth = 1988

function calcAge(year) {
  return 2020 - year
}

console.log(`This is ${firstName} ${lastName}.
  She was born in ${yearOfBirth}.
  Today she is ${calcAge(yearOfBirth)}.`)

  const n = `${firstName} ${lastName}`
  console.log(n.startsWith("K"))
  console.log(n.endsWith("s"))
  console.log(n.includes(" "))
  console.log(firstName.repeat(5))

*/
//Arrow Functions
/*
const years = [1990, 1988, 1965, 1934]

let ages = years.map(el => 2020 - el) //1 arg, 1 line of code
console.log(ages)

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`)
console.log(ages6)

ages6 = years.map((el, index) => { //more than one line of code
  const now = new Date().getFullYear()
  const age = now - el
  return `Age element ${index + 1}: ${age}.`
})

console.log(ages6)
*/

//Arrow Functions 2
// Do not have a this keyword

//ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function(){
    var self = this;
    document.querySelector(".green").addEventListener("click", function(){
      var str = "This box is number " + self.position + " and is " + self.color
      alert(str)
    })
  }
}


//ES6
//with arrow function you can access this keyword
/*
const box6 = {
  color: "green",
  position: 1,
  clickMe: function(){

    document.querySelector(".green").addEventListener("click", () => {
      var str = "This box is number " + this.position + " and is " + this.color
      alert(str)
    })
  }
}
box6.clickMe()

var friends = ["Bob", "Jane", "Mark"]

function Person(name) {
  this.name = name
}

Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el =>
  `${this.name} is friends with ${el}`)
  console.log(arr)
}
new Person("Mike").myFriends6(friends)
*/


//Destructuring
//Extract data from data structure

//ES5
var john = ["John", 26]
//var name = john[0]
//var age = john[1]

//ES6
const [name, age] = ["John", 26]
console.log(name)
console.log(age)

const obj = {
  firstName: "John",
  lastName: "Smith"
}

const {firstName, lastName} = obj
console.log(firstName)
console.log(lastName)

const {firstName: a, lastName: b} = obj
console.log(firstName)
console.log(lastName)


function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990)
console.log(age2)
console.log(retirement)
