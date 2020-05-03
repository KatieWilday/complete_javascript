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
names = ["Katie", "Mark", "Pam"]
years = [1990, 1969, 1948]

console.log(names[2])
console.log(names.length)

//Mutate Array Data
names[1] = "Ben"
names[5] = "Mary"
console.log(names)
