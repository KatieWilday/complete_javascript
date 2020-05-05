/*
var firstName = "Katie"
console.log(firstName)

const lastName = "Wilday"
const age = 31

console.log(lastName + " is " + age)
*/


/*var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

var markHigherBMI = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI heigher than John\'s?' + markHigherBMI)
*/
/*
var firstName = 'John'
var civilStatus = 'single'

if (civilStatus === 'married') {
  console.log(firstName + ' is married!')
} else {
  console.log(firstName + ' is not married!')
}
*/
/*
//Truthey and Falsy values
//Falsy values = undefined, null, 0, "", NaN
//Truthy: NOT falsy values

var height = 23

if (height || height === 0){ //=== strict, == datatypes of both variable don't have to match
  console.log("variable is defined")
}
else {
  console.log("variable has NOT been defined")
}

if (height == '23') {
  console.log("the == operator does type coercion")
}

*/

//Coding CHALLENGE
/*
var scoreJohn = (200 + 120 + 94) / 3;
var scoreMike = (300 + 94 + 200) / 3;
var scoreMary = (200 + 300 + 100) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}
*/

//Functions - containers that hold code and pass args into
//Dry - Do Not Repeat
/*
function calculateAge(birthYear) {
  return 2020 - birthYear
}

var ageJohn = calculateAge(1990)
var ageMike = calculateAge(1948)
var ageKatie = calculateAge(1969)
console.log(ageJohn, ageMike, ageKatie)


function retirementYear(year, firstName) {
  age = calculateAge(year)
  retirement = 65 - age

  if (retirement > 0){
    console.log(firstName + " retires in " + retirement + " years.")
  }
  else {
    console.log(firstName + " is already retired.")
  }

}

retirementYear(1990, "John")
retirementYear(1948, "Mike")
retirementYear(1969, "Katie")
*/


//Function Statements and Expressions
//Expressions - always produces a value (2 + 3)
//Statements - if/else, loops
/*
whatDoYouDo = function(job, firstName){ //Function Expression
  switch(job){
    case 'teacher':
      return firstName + " teaches kids how to code. "
    case 'driver':
      return firstName + " drives for red car. "
    case 'designer':
      return firstName + " designs the room. "
    default:
      return firstName + " does something else. "
  }
}

console.log(whatDoYouDo("teacher", "Katie"))
console.log(whatDoYouDo("designer", "Sam"))
console.log(whatDoYouDo("banker", "Peter"))
*/

//Arrays

//Initialize new Array
/*
names = ["Katie", "Mark", "Pam", "designer"]
years = [1990, 1969, 1948]

//console.log(names[2])
//console.log(names.length)


names.push("Sara") //add to end of array
names.unshift("Hanna") //add to beginning of array
names.pop() //remove from end of array
names.shift() //remove form beginning of Array
names.indexOf("Katie") //tells where element is in array
//Mutate Array Data
//names[1] = "Ben"
//names[5] = "Mary"
console.log(names.indexOf("Katie"))

isDesigner = names.indexOf("designer") === -1 ? "Katie is not a designer" : "Katie is a designer"
console.log(isDesigner)
*/

//Coding Challenge 3
/*
function tipCalc(bill) {
  var percentage;
    if (bill < 50) {
      percentage = .2
    }
    else if (bill >= 50 && bill < 200) {
      percentage = .15
    }
    else {
      percentage = .1
    }
    return percentage * bill
}

bills = [124, 48, 269]
tips = [tipCalc(bills[0]),
        tipCalc(bills[1]),
        tipCalc(bills[2])]
finalValues = [bills[0] + tips[0],
               bills[1] + tips[1],
               bills[2] + tips[2]]
console.log(tips, finalValues)
*/

//Objects - order doesn't matter
/*
john = {
  firstName: "John",
  lastName: "Turner",
  birthYear: "1990",
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false
}

console.log(john.firstName)
console.log(john['lastName'])

john.job = "designer"
john["isMarried"] = true
console.log(john)

jane = new Object()
jane.firstName = "Jane"
jane.birthYear = 1991
jane["lastName"] = "Smith"
console.log(jane)

*/

//Object Methods
/*
john = {
  firstName: "John",
  lastName: "Turner",
  birthYear: "1988",
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function() {
    this.age = 2020 - this.birthYear //this = points to itself/present object
  }
}

john.calcAge()
console.log(john)
*/


//Coding Challeng 4
/*
mark = {
  fullName: "Mark Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  }
}

john = {
  fullName: "John Smith",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  }
}


if (john.calcBMI() > mark.calcBMI()){
  console.log(john.fullName + " has a higher bmi of " + john.bmi)
}
else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + " has a higher bmi of " + mark.bmi)
}
else {
  console.log("They have the same bmi")
}

*/

//Loops and Iteration
//Automate repetative tasks
/*
for (i = 1; i <= 20; i+=2){ //intial value, condition, counter update
  console.log(i)
}

john = ["john", "smith", 1990, "designer", "false"]

for (i = 0; i < john.length; i++) {
console.log(john[i])
}

i = 0
while(i < john.length){
  console.log(john[i])
  i++
}
*/

//Contine and break statements - to break out of loop
john = ["john", "smith", 1990, "designer", "false"]

for (i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue //continue to next
  console.log(john[i])
}

for (i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break //stops the loop
  console.log(john[i])
}

//Looping backward

for (i = john.length - 1; )
