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
/*
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
*/


//Arrays in ES6
/*
const boxes = document.querySelectorAll(".box")
boxesArr = Array.from(boxes)
Array.from(boxes).forEach(cur => cur.style.backgroundColor = "dodgerblue")

//change text boxes

for(const cur of boxesArr) {
  if(cur.className.includes("blue")){
    continue;
  }
  cur.textContent = "I changed to blue."
}

ages = [12, 17, 8, 21, 14, 11]
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18))
*/

//Spread Operator
//Expand elements of Array
/*
function addFourAges(a, b, c, d){
  return a + b + c + d
}

sum1 = addFourAges(18, 20, 30, 31)
console.log(sum1)

//ES5
var ages = [18, 30, 20, 31]
var sum2 = addFourAges.apply(null, ages) //apply: take array and call function

console.log(sum2)


//ES6
const sum3 = addFourAges(...ages) //expand array into components
console.log(sum3)

const familySmith = ["John", "Jane", "Mark"]
const familyMiller = ["Mary", "Bob", "Anne"]
const bigFamily = [...familySmith, "Lily", ...familyMiller]
console.log(bigFamily)

const h = document.querySelector("h1")
const boxes = document.querySelectorAll(".box")
const all = [h, ...boxes]

Array.from(all).forEach(cur => cur.style.color = "purple") //returns array
*/

//Rest Parameters
//Pass arguments into functions and use those Parameters

//ES5
/*
function isFullAge5() {
  argsArray = Array.prototype.slice.call(arguments)
  argsArray.forEach(function(cur){
    console.log((2020 - cur) >= 18)
  })
}

isFullAge5(1990, 1999, 1965)
isFullAge5(2019, 1987)

//ES6
function isFullAge6(...years) { //transforms into array and pass into function
  years.forEach(cur => console.log((2020 - cur) >= 18))
}

isFullAge6(1990, 1999, 1965)


//ES5
function isFullAge5(limit) {
  argsArray = Array.prototype.slice.call(arguments, 1) //slice allows us to cut piece of array
  argsArray.forEach(function(cur){
    console.log((2020 - cur) >= limit)
  })
}

isFullAge5(16, 1990, 2014, 1965)

//ES6
function isFullAge6(limit, ...years) { //transforms into array and pass into function
  years.forEach(cur => console.log((2020 - cur) >= limit))
}

isFullAge6(12, 1990, 1999, 1965)
*/

//Default Parameters
//One or more paramters to be preset - default value

//ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

  lastName === undefined ? lastName = "Smith" : lastName = lastName
  nationality === undefined ? nationality = "American" : nationality = nationality

  this.firstName = firstName
  this.yearOfBirth = yearOfBirth
  this.lastName = lastName
  this.nationality = nationality
}

john = new SmithPerson("John", 1990)
emily = new SmithPerson("Emily", 2011, "Diaz", "Spanish")
*/

//ES6
/*
function SmithPerson(firstName, yearOfBirth, lastName = "Smith", nationality = "American") {
  this.firstName = firstName
  this.yearOfBirth = yearOfBirth
  this.lastName = lastName
  this.nationality = nationality
}


john = new SmithPerson("John", 1990)
emily = new SmithPerson("Emily", 2011, "Diaz", "Spanish")
*/

//Maps
//map string keys to arbitrary values - can use any value booleans, strings, etc.
/*
const question = new Map()
question.set("question", "What is the offical name of the latest major JavaScript version?")
question.set(1, "ES5")
question.set(2, "ES6")
question.set(3, "ES2015")
question.set(4, "ES7")
question.set("correct", 3)
question.set(true, "Correct!")
question.set(false, "Try Again!")

console.log(question.get("question"))
//console.log(question.size)

if(question.has(4)) {
  //question.delete(4)
  //console.log("answer 4 is here")
}

//question.forEach((value, key) => console.log(`This is ${key} and it's ${value}`))

for(let [key, value] of question.entries()) {
  if (typeof(key) === "number") {
    console.log(`Answer ${key}: ${value}`)
  }
}

const ans = parseInt(prompt("Write the correct answer"))
console.log(question.get(ans === question.get("correct")))
*/

//Classes
//make it easier to impliment inheritance

//ES5
/*
Person5 = function(name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}

Person5.prototype.calcAge = function() {
  age = new Date().getFullYear - yearOfBirth
  console.log(age)
}

john5 = new Person5("John", 1990, "teacher")


//ES6

class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
  }

  calcAge() {
    age = new Date().getFullYear - yearOfBirth
    console.log(age)
  }

  static greeting() {
    console.log("Hey there!")
  }
}

const katie6 = new Person6("Katie", 1988, "software engineer")

Person6.greeting()

*/

//Classes with Sub Classes
//ES5
/*
Person5 = function(name, yearOfBirth, job) { //super class
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}

Person5.prototype.calcAge = function() {
  age = new Date().getFullYear() - this.yearOfBirth
  console.log(age)
}

Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) { //sub class
  Person5.call(this, name, yearOfBirth, job)
  this.olympicGames = olympicGames
  this.medals = medals
}

Athlete5.prototype = Object.create(Person5.prototype)

johnAthlete5 = new Athlete5("John", 1990, "swimmer", 4, 10)

johnAthlete5.calcAge()


//ES6
class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
  }

  calcAge() {
    var age = new Date().getFullYear() - this.yearOfBirth
    console.log(age)
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job)
    this.olympicGames = olympicGames
    this.medals = medals
  }

  wonMedal(){
    this.medals++
    console.log(this.medals)
  }
}

  const johnAthlete6 = new Athlete6("John", 1990, "swimmer", 3, 10)
  johnAthlete6.wonMedal()
  johnAthlete6.calcAge()
*/


//Coding Challenge 8
/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element { //super class
  constructor(name, buildYear){
    this.name = name
    this.buildYear = buildYear
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear)
    this.area = area //km
    this.numTrees = numTrees
  }
  treeDensity() {
    const density = this.numTrees/this.area
    console.log(`${this.name} has a tree density of ${density} trees per square km.`)
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear)
    this.length = length
    this.size = size
  }
  classifyStreet() {
    const classification = new Map()
    classification.set(1, "tiny")
    classification.set(2, "small")
    classification.set(3, "normal")
    classification.set(4, "big")
    classification.set(5, "huge")
    console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`)
  }
}

const allParks = [new Park("Green Park", 1990, .2, 215),
new Park("National Park", 1894, 2.9, 3421),
new Park("Oak Park", 1934, .4, 1200)]


const allStreets = [new Street("Ocean Ave", 1999, 1.1, 4),
new Street("Evergreen St.", 2008, 2.7, 2),
new Street("4th Street", 2015, .8),
new Street("Sunset Blvd", 1982, 2.5, 5)]

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0)
    return [sum, sum / arr.length]
}

function reportParks(p) {
  console.log("----PARKS REPORT----")

  //Density
  p.forEach(el => el.treeDensity()) //loop through parks

  //Average Age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear)
  const [totalAge, avgAge] = calc(ages)
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`)

  //Which park has more than 1000 trees
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000) //returns an array/finds index with more than 1000 trees
  console.log(`${p[i].name} has more than 1000 trees.`)
}

function reportStreets(s) {
  console.log("----STREETS REPORT----")
  //Total and average length of town's streets
  const [totalLength, avgLength] = calc(s.map(el => el.length))
  console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an Average
    of ${avgLength} km.`)

  //Classify sizes
  s.forEach(el => el.classifyStreet())
}

reportParks(allParks)
reportStreets(allStreets)
