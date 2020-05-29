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
//Object that keeps track about whether a certain event has happened or not

const getIDs = new Promise((resolve, reject) => { //executer function takes resolve, reject
  setTimeout(() => { //Asynchronous code
    resolve([15, 12, 26, 64]) //successful-pass in data
  }, 1500)
})

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(id => {
      const recipe = {title: "Fresh Tomato Pasta", publisher: "Katie"}
      resolve(`${id}: ${recipe.title}`)
    }, 1500, recID)
  })
}

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(pub => {
      const recipe = {title: "Italian Pizza", publisher: "Katie"}
      resolve(`${pub}: ${recipe.title}`)
    }, 1500, publisher)
  })
}

getIDs
.then(ids => { //used to handle fulfilled promise
  console.log(ids) //result of succesful promise
  return getRecipe(ids[2])
})
.then(recipe => {
  console.log(recipe)
  return getRelated("Katie")
})
.then(recipe => {
  console.log(recipe)
})
.catch(error => {
  console.log(error)
})
