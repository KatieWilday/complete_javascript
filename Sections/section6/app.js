//Budget Controller
budgetController = (function(){

  Expense = function(id, description, value){
    this.id = id
    this.description = description
    this.value = value
    this.percentage = -1
  }

  Expense.prototype.calcPercentage = function(totalIncome){
    if(totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100)
    }else {
      this.percentage = -1
    }
  }

  Expense.prototype.getPercentage = function(){
    return this.percentage
  }

  Income = function(id, description, value) {
    this.id = id
    this.description = description
    this.value = value
  }

  calcTotal = function(type) {
    sum = 0
    data.allItems[type].forEach(function(cur){
      sum += cur.value
    })
    data.totals[type] = sum
  }

  data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  }

  return {
    addItem: function(type, des, val) {
      var newItem, id;

      //Create new id
      if(data.allItems[type].length > 0){
        id = data.allItems[type][data.allItems[type].length - 1].id + 1
      } else {
        id = 0;
      }


      //Create new item based on inc or exp type
      if(type === "exp"){
        newItem = new Expense(id, des, val)
      } else if (type === "inc") {
        newItem = new Income(id, des, val)
      }
      //Push it into our data structure
      data.allItems[type].push(newItem)

      //Return the new element
      return newItem
    },

    deleteItem: function(type, id) {
      ids = data.allItems[type].map(function(current){ //map returns brand new array
        return current.id;
      })
      index = ids.indexOf(id)

      if (index !== -1) {
        data.allItems[type].splice(index, 1)
      }
     },

    calculateBudget: function() {
        // calculate total income and expenses
        calcTotal("exp")
        calcTotal("inc")

        //calculate budget" income - expenses
        data.budget = data.totals.inc - data.totals.exp

        //calculate percentage of income that we spent
        if(data.totals.inc > 0) {
          data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
        } else {
          data.percentage = -1
        }

    },

    calculatePercentages: function() {
      data.allItems.exp.forEach(function(current){
        current.calcPercentage(data.totals.inc);
      })
    },

    getPercentages: function(){
      allPerc = data.allItems.exp.map(function(current){
        return current.getPercentage()
      })
      return allPerc;
    },

    getBudget: function() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      }
    },

    testing: function(){
      console.log(data)
    }
  }

})();

//User Interface Controller
uIController = (function() {

  domStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expensesLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",
    container: ".container"

  }
  return { //available globally
    getInput: function(){
      return {
        type: document.querySelector(domStrings.inputType).value, //will be either inc or exp
        description: document.querySelector(domStrings.inputDescription).value,
        value: parseFloat(document.querySelector(domStrings.inputValue).value)
      }
    },

    addListItem: function(obj, type) {
      var html, newHtml, element
      //1. Create HTML with placeholder text
      if (type === "inc") {
        element = domStrings.incomeContainer
        html = `<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div>
          <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete">
          <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
          </div> </div> </div>`
      } else if (type === "exp") {
        element = domStrings.expensesContainer
        html = `<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div>
          <div class="right clearfix"> <div class="item__value">%value%</div>
          <div class="item__percentage">21%</div> <div class="item__delete">
          <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
          </div> </div> </div>`
      }

      //2. Replace placeholder text with actual data (from obj)
      newHtml = html.replace("%id%", obj.id)
      newHtml = newHtml.replace("%description%", obj.description)
      newHtml = newHtml.replace("%value%", obj.value)

      //Insert HTML into the DOM
      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml)
    },

    deleteListItem: function(selectorID) {
      element = document.getElementById(selectorID)
      element.parentNode.removeChild(element)
    },

    clearFields: function() {
      var fields, fieldsArray;
      fields = document.querySelectorAll(domStrings.inputDescription + ", " + domStrings.inputValue) //returns a list not array
      fieldsArray = Array.prototype.slice.call(fields) //slice - returns copy of array

      fieldsArray.forEach(function(current, index, array) { //loops over all elements //can recieve up to 3 args (current, index, array)
        current.value = "";
      })
      fieldsArray[0].focus()
    },

    displayBudget: function(obj) {
      document.querySelector(domStrings.budgetLabel).textContent = obj.budget
      document.querySelector(domStrings.incomeLabel).textContent = obj.totalInc
      document.querySelector(domStrings.expensesLabel).textContent = obj.totalExp

      if (obj.percentage > 0) {
        document.querySelector(domStrings.percentageLabel).textContent = obj.percentage + "%"
      } else {
        document.querySelector(domStrings.percentageLabel).textContent = "--"
      }
    },

    getDOMStrings: function() {
      return domStrings
    }
  }

})();

//Global App Controller
controller = (function(budgetCtrl, uICtrl){

  function setupEventListeners() {
    dom = uICtrl.getDOMStrings()

    document.querySelector(dom.inputBtn).addEventListener("click", ctrlAddItem)

    document.addEventListener("keypress", function(e){
      if(e.keyCode === 13) {
        ctrlAddItem()
      }
    })

    document.querySelector(dom.container).addEventListener("click", ctrlDeleteItem)
  }


  function updateBudget() {
    //1. Calculate budget
    budgetCtrl.calculateBudget();

    //2. Returns the budget
    budget = budgetCtrl.getBudget();
    console.log(budget)

    //3. Display budget
    uICtrl.displayBudget(budget)
  }

  function updatePercentages() {
    //1. Calc percentages
    budgetCtrl.calculatePercentages();

    //2. read percentages from budget Controller
    percentages = budgetCtrl.getPercentages();

    //3. update UI with new percentages
    console.log(percentages)
  }

  function ctrlAddItem() {
    var input, newItem
    //1. Get field input data
    input = uICtrl.getInput()
    console.log(input)

    if(input.description !== "" && !isNaN(input.value) && input.value > 0) {
      //2. Add item to budget Controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value)

      //3. Add new item to Interface
      uICtrl.addListItem(newItem, input.type);

      //4. Clear the fields
      uICtrl.clearFields();

      //5. Calc and update budget
      updateBudget();

      //6. Calc and update update percentages
      updatePercentages();
    }

  }

  function ctrlDeleteItem(event) {
    var itemID, splitID, type, iD
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id

    if(itemID) {
      splitID = itemID.split("-")
      type = splitID[0]
      id = parseInt(splitID[1])

      //1. delete item from data structure
      budgetCtrl.deleteItem(type, id)

      //2. delete item from UI
      uICtrl.deleteListItem(itemID)

      //3. update and show new budget
      updateBudget();

      //4. Calc and update update percentages
      updatePercentages();
    }
  }

  return { //make it public, put all the code we want to run at immediate start of app
    init: function(){
      console.log("App has started")
      uICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: 0
      })
      setupEventListeners()
    }
  }

})(budgetController, uIController);


controller.init();
