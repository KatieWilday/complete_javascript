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
