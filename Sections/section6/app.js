budgetController = (function(){
  x = 23
  add = function(a){
    return x + a
  }

  return {
    publicTest: function(b){
      console.log(add(b))
    }
  }


})()
