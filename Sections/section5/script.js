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
/*
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
*/


//Invoked Function Expressions (IIFE)
/*
function game() {
  score = Math.random() * 10
  console.log(score >= 5)
}
game()

(function () {
  score = Math.random() * 10
  console.log(score >= 5)
})();

//console.log(score)

(function (goodLuck) {
  score = Math.random() * 10
  console.log(score >= 5 - goodLuck)
})(5);
*/

//Closures
/*
function retirement(retirementAge) {
  a = " years left until retirement."
  return function(yearOfBirth){
    age = 2020 - yearOfBirth
    console.log((retirementAge - age) + a)
  }
}

retirementUS = retirement(66)
retirementUS(1990)
retirementGermany = retirement(65)
retirementIceland = retirement(67)

retirementGermany(1990)
retirementIceland(1990)

function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
        console.log(name + ", can you explain UX design?")
    } else if (job === "teacher") {
        console.log("What subject do you teach, " + name + "?")
    } else {
        console.log("Hello " + name + ", what do you do?")
    }
  }
}

interviewQuestion("designer")("Andrew")
*/

//Bind, Call and Apply
/*
john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log("Good moring " + timeOfDay + " ladies and gentlemen. I'm "  + this.name + this.job + this.age)
    } else if (style === "friendly") {
      console.log("Hey what's up? " + this.name + this.job + this.age + " Have a nice " + timeOfDay)
    }
  }
}

emily = {
  name: "Emily",
  age: 35,
  job: "designer"
}

john.presentation("formal", "morning")

john.presentation.call(emily, "friendly", "afternoon") //allows to set this variable to emily
john.presentation.apply(emily, ["friendly", "afternoon"]) //second arg is an array

johnFriendly = john.presentation.bind(john, "friendly") //creates a copy and return function
johnFriendly("morning")
johnFriendly("night")

emilyFormal = john.presentation.bind(emily, "formal")
emilyFormal("afternoon")




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

function isFullAge(limit, el) {
  return el >= limit
}

ages = arrayCalc(years, calcAge)
fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
console.log(ages)
console.log(fullJapan)
*/

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/*
(function() {
  function Question(question, answers, correct) {
    this.question = question
    this.answers = answers
    this.correct = correct
  }

  Question.prototype.displayQuestion =
  function() {
    console.log(this.question)
    for(i=0; i < this.answers.length; i++) {
      console.log(i + ":" + this.answers[i])
    }
  }

  Question.prototype.checkAnswer =
  function(ans) {
    if (ans == this.correct){
      console.log("Correct answer!")
    } else {
      console.log("Try Again.")
    }
  }

  q1 = new Question("Is JavaScript the coolest programming language?",["Yes", "No"], 0)
  q2 = new Question("What is the name of the instructor?", ["John", "Mike", "Jonas"], 2)
  q3 = new Question("What does best describes coding?", ["Boring", "Hard", "Fun", "Crazy"], 2)


  questions = [q1, q2, q3]

  num = Math.floor(Math.random() * questions.length)

  questions[num].displayQuestion()

  answer = parseInt(prompt("Please select the correct answer."))

  questions[num].checkAnswer(answer)
})();
*/
/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;

        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }


    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();


    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    }

    nextQuestion();

})();
*/
