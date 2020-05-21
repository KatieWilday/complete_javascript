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

})();

//User Interface Controller
uIController = (function() {

  domStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  }
  return { //available globally
    getInput: function(){
      return {
        type: document.querySelector(domStrings.inputType).value, //will be either inc or exp
        description: document.querySelector(domStrings.inputDescription).value,
        value: document.querySelector(domStrings.inputValue).value
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
        ctrlAddItem();
      }
    })
  }

  function ctrlAddItem() {

    //1. Get field input data
    input = uICtrl.getInput()
    console.log(input)

    //2. Add item to budget Controller
    //3. Add new item to Interface
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
