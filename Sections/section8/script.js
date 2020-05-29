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
/*
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

//Promises to Async/Await
//await can only be used inside an asynch function
async function getRecipeAW() {
  const ids = await getIDs
  console.log(ids)
  const recipe = await getRecipe(ids[2])
  console.log(recipe)
  const related = await getRelated("Katie")
  console.log(related)
}
getRecipeAW()
*/

//AJAX and API
//Asynchronous JavaScript and XML
//Application Programming Interface - allows apps to talk to eachother
/*
function getWeather(woeid) {
  fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
  .then(result => {
  // console.log(result);
    return result.json();
  })
  .then(data => {
  // console.log(data);
    const today = data.consolidated_weather[0];
    console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
  })
  .catch(error => console.log(error));
  }
  getWeather(2487956);
  getWeather(44418);


  async function getWeatherAW(woeid) {
    try {
      const result = await fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`);
      const data = await result.json();
      const tomorrow = data.consolidated_weather[1];
      console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
        return data;
    } catch(error) {
      alert(error);
      }
    }
    getWeatherAW(2487956);

  let dataLondon;
    getWeatherAW(44418).then(data => {
      dataLondon = data
      console.log(dataLondon);
    });
*/
