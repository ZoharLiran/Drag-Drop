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

SingleListApp = {}

SingleListApp.Controller = function(){

}

SingleListApp.Controller.prototype = {
  bind: function(){bindNbuild()}
}

bindNbuild = function(){
  $(".item").draggable({helper: 'clone'});
  $(".item").on('click', myHelper)
  $("#grocery_list").droppable({ 
        drop: function(event, ui) { 
            var v = ui.draggable[0].cloneNode(true);
            $(this).append($(v));
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