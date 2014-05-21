# Behavior Drill Grocery List

##Learning Competencies
- Use object literals, constructor functions and prototypical inheritance in Javascript.
- Navigate jquery ui docs to understand how draggable and droppable work.

##Summary

A simple drag-and-drop grocery list application.

Using the following concepts and library features:

- [Object-Oriented Programming in JavaScript](https://developer.mozilla.org/en-US/docs/JavaScript/Introduction_to_Object-Oriented_JavaScript)
- The jQuery UI [draggable()](http://api.jqueryui.com/draggable/) and [droppable()](http://api.jqueryui.com/droppable/) functions

## Objectives

The focus was on writing solid OOJS.

### Model Items and Lists

Objective: model each of the components of this application and to provide an elegant, object-oriented solution.

Features in play here:

- When an item from the `Store List` is dragged, the original element does not change.  You could say it uses a *clone*.
- The same item can be dragged to the `Grocery List` multiple times.
- When an item is added to the `Grocery List`, the total price is updated to reflect the new changes.
