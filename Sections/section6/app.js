//Budget Controller
budgetController = (function(){

//Some code

})();

//User Interface Controller
uIController = (function() {

    //Some code

})();

//Global App Controller
controller = (function(budgetCtrl, uICtrl){
  function ctrlAddItem() {
    //1. Get field input data
    //2. Add item to budget Controller
    //3. Add new item to Interface
    //4. Calculate budget
    //5. Display budget
    console.log("katie")
  }
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem)

  document.addEventListener("keypress", function(e){
    if(e.keyCode === 13) {
      ctrlAddItem();
    }

  })

})(budgetController, uIController);
