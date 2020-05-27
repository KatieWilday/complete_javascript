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

const years = [1990, 1988, 1965, 1934]

let ages = years.map(el => 2020 - el)
console.log(ages)

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`)
console.log(ages6)

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear()
  const age = now - el
  return `Age element ${index + 1}: ${age}.`
})

console.log(ages6)
