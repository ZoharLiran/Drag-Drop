SingleListApp = {}

SingleListApp.Controller = function(){
}

SingleListApp.List = function(){
  this.items = []
  this.total = 0
}

SingleListApp.List.prototype = {
  updateTotal: function(item){
    this.total += item.value
    this.items.push(item)
  }
}

SingleListApp.Item = function(input){
  this.name = input.name;
  this.value = input.value;
}
