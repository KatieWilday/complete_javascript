//Budget Controller
budgetController = (function(){

//Some code

})();

//User Interface Controller
uIController = (function() {

  return { //available globally
    getInput: function(){
      return {
        type: document.querySelector(".add__type").value, //will be either inc or exp
        description: document.querySelector(".add__description").value,
        value: document.querySelector(".add__value").value
      }
    }
  }

})();

//Global App Controller
controller = (function(budgetCtrl, uICtrl){

  function ctrlAddItem() {
    //1. Get field input data
    input = uICtrl.getInput()
    console.log(input)

    //2. Add item to budget Controller
    //3. Add new item to Interface
    //4. Calculate budget
    //5. Display budget
  }

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem)

  document.addEventListener("keypress", function(e){
    if(e.keyCode === 13) {
      ctrlAddItem();
    }

  })

})(budgetController, uIController);
