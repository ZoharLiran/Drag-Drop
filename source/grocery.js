/*
 * What are the objects in this exercise?
 * What are their properties and methods?
 * How do your objects interact with their respective DOM elements?
 objects:
 1. item
  a. name
  a. price
 2. groceryList
  a. total
  a. 

 */

$(document).ready(function(){
  view = new SingleListApp.View();
  list = new SingleListApp.List();
  controller = new SingleListApp.Controller();
  controller.bind();

})


SingleListApp.Controller.prototype = {
  bind: function(){bindNbuild()},
  update: function(droppedItem){ 
    var v = droppedItem.draggable[0].cloneNode(true);
    item = new SingleListApp.Item(parseNode(v));
    list.updateTotal(item);
    view.renderList(v);
    view.updateTotal(list.total)

  }
}

parseNode = function(node){
  return {
    name: node.children[0].innerHTML, 
    value: parseFloat(node.children[1].innerHTML)
  }
}


bindNbuild = function(){
  $(".item").draggable({helper: 'clone'});
  $(".item").on('click', myHelper)
  $("#grocery_list").droppable({ 
        drop: function(event, ui) { 
            controller.update(ui);
        }});
}

myHelper = function(event){
  console.log("yes")
}

var Item = function(name, price){
  this.name = name
  this.price = price
}

var List = function(){
  total = 0
}