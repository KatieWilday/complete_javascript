//Budget Controller
budgetController = (function(){

  Expense = function(id, description, value){
    this.id = id
    this.description = description
    this.value = value
  }

  Income = function(id, description, value) {
    this.id = id
    this.description = description
    this.value = value
  }

  data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
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
    expensesContainer: ".expenses__list"
  }
  return { //available globally
    getInput: function(){
      return {
        type: document.querySelector(domStrings.inputType).value, //will be either inc or exp
        description: document.querySelector(domStrings.inputDescription).value,
        value: document.querySelector(domStrings.inputValue).value
      }
    },

    addListItem: function(obj, type) {
      var html, newHtml, element
      //1. Create HTML with placeholder text
      if (type === "inc") {
        element = domStrings.incomeContainer
        html = `<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div>
          <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete">
          <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
          </div> </div> </div>`
      } else if (type === "exp") {
        element = domStrings.expensesContainer
        html = `<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div>
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
  }

  function ctrlAddItem() {
    var input, newItem
    //1. Get field input data
    input = uICtrl.getInput()
    console.log(input)

    //2. Add item to budget Controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value)

    //3. Add new item to Interface
    uICtrl.addListItem(newItem, input.type)
    //4. Calculate budget
    //5. Display budget
  }
  return { //make it public, put all the code we want to run at immediate start of app
    init: function(){
      setupEventListeners()
    }
  }

})(budgetController, uIController);


controller.init();
