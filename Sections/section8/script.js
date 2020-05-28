//Asynchronous Functions
/*
const second = () => {
  setTimeout(() => {
    console.log("Asynchronous")
  }, 2000)
}

const first = () => {
  console.log("first")
  second()
  console.log("third")
}

first()

function getRecipe(){
  setTimeout(() => {
    const recipeID = [15, 12, 26, 64]
    console.log(recipeID)

    setTimeout(id => {
      const recipe = {title: "Fresh Tomato Pasta", publisher: "Katie"}
      console.log(`${id}: ${recipe.title}`)

      setTimeout(publisher => {
        const recipe2 = {title: "Italian Pizza", publisher: "Katie"}
        console.log(recipe)
      }, 1500, recipe.publisher)

    }, 1500, recipeID[2])

  }, 1500)
}
getRecipe()
*/

//Promises
