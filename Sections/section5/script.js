//Function Constructor: pattern for a "blueprint"

/*john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
}

Person = function(name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}

Person.prototype.calcAge = function() {
  console.log(2020 - this.yearOfBirth)
}

Person.prototype.lastName = "Smith"

john = new Person("John", 1990, "teacher") //new empty object is corrected, then Person function is called.
katie = new Person("Katie", 1988, "graphic designer")
jane = new Person("Jane", 1950, "bus driver")

john.calcAge()
katie.calcAge()
jane.calcAge()

console.log(john.lastName, jane.lastName, katie.lastName)
*/


//Object.create
/*
personProto = {
  calcAge: function() {
    console.log(2020 - this.yearOfBirth)
  }
}
john.name = "John"
john.yearOfBirth = 1990
john.job = "teacher"

john = Object.create(personProto)
jane = Object.create(personProto,
{
  name: { value: "Jane "},
  yearOfBirth: { value: 1980 },
  job: { value: "designer"}
})
*/

//Primitives vs Objects
/*
a = 23
b = a
a = 46
console.log(a, b)


//Objects
obj1 = {
  name: "John",
  agre: 22
}

obj2 = obj1
obj1.age= 30
console.log(obj1.age, obj2.age)

//Functions
age = 27
obj = {
  name: "Katie",
  city: "New York"
}

function change(a, b) {
  a = 30
  b.city = "Broadalbin" //reference of object
}

change(age, obj)

console.log(age, obj.city)
*/

//Passing Functions As Arguments
/*
years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) { //loops through away
        arrRes.push(fn(arr[i])); //pushed result into array
    }
    return arrRes;
}

//callback functions
function calcAge(el) {
  return 2020 - el
}

function isFullAge(el) {
  return el >= 18
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (.67 * el)) //rounds to closet integer
  } else {
    return -1
  }
}

ages = arrayCalc(years, calcAge)
fullAges = arrayCalc(ages, isFullAge)
rates = arrayCalc(ages, maxHeartRate)

console.log(ages)
console.log(fullAges)
console.log(rates)
*/

//First Class functions

function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) { //anonymous function
      console.log(name + ", can you explain UX design?")
    }
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach, " + name + "?")
    }
  } else {
    return function(name) {
      console.log("Hello " + name + ", what do you do?")
    }
  }
}

interviewQuestion("teacher")("Andrew")

teacherQuestion = interviewQuestion("teacher")
designerQuestion = interviewQuestion("designer")
otherQuestion = interviewQuestion()
teacherQuestion("John")
designerQuestion("Katie")
otherQuestion("Sam")
