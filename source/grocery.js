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
  controller = new SingleListApp.Controller();
  controller.bind();
})


SingleListApp.Controller.prototype = {
  bind: function(){bindNbuild()},
  updateList: function(droppedItem, droppingSpot){ 
    var v = droppedItem.draggable[0].cloneNode(true);
    List.update(v)
    parseFloat(v.children[1].innerHTML)
    $(droppingSpot).append($(v));
  }
}


bindNbuild = function(){
  $(".item").draggable({helper: 'clone'});
  $(".item").on('click', myHelper)
  $("#grocery_list").droppable({ 
        drop: function(event, ui) { 
            controller.updateList(ui, this);
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