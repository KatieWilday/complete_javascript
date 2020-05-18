/*SCOPING
var a = "Hello"
first();

function first() {
  var b = "Hi"
  second();

  function second() {
    var c = "Hey!"
    third();
  }
}

function third() {
  var d = "John"
  console.log(a + d);
}
*/


//The "This" Keyword

//console.log(this)

/*calcAge(1988)

function calcAge(year) {
  console.log(2020 - year)
  console.log(this)
}

john = {
  name: "John",
  yearOfBirth: 1990,
  calcAge: function() {
    console.log(this)
    console.log(2020 - this.yearOfBirth)
  }
}

john.calcAge();


mike = {
  name: "Mike",
  yearOfBirth: 1984,
}

mike.calcAge = john.calcAge
mike.calcAge()
*/
