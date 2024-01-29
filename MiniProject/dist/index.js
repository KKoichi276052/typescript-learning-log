"use strict";
var btn = document.querySelector("#btn");
var input = document.querySelector("#todoinput");
var form = document.querySelector("form");
var list = document.querySelector("#todolist");
var todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    var todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
function createTodo(todo) {
    var newLI = document.createElement("LI");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', function () {
        todo.completed = checkbox.checked;
        saveTodos();
    }, newLI.append(todo.text));
    newLI.append(checkbox);
    list.append(newLI);
}
// Event listener
form.addEventListener("submit", handleSubmit);
