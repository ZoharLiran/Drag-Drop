SingleListApp.View = function(){
}

SingleListApp.View.prototype = {
  renderList: function(node, total){
    addNode(node);
  },
  updateTotal: function(total){
    updateTotal(total);
  }
}

addNode = function(node){
  $("#grocery_list").append($(node));
}

updateTotal = function(total){
  document.getElementById("total_cost").innerHTML = total
}



