SingleListApp = {}

SingleListApp.Controller = function(){
}

List = function(){
  this.items = [];
  this.total = 0;
}

List.prototype = {
  updateTotal: function(value){
    this.total += value
  }
}

Item = function(input){
  this.name = input.name;
  this.value = input.value;
}
