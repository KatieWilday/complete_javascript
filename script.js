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



//Coding CHALLENGE

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
