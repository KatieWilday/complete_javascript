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
{
  const a = 1
  let b = 2
  var c = 3 //function scoped not block scoped
}
//console.log(a + b)
console.log(c)
