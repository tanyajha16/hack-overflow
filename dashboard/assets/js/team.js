let todoitem = document.getElementById("btn-get-todo");
let container = document.getElementById("todo-items");
let inputField = document.getElementById("get-todo");

todoitem.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    var x = document.createElement("hr");
    paragraph.innerHTML = inputField.value;
    container.appendChild(paragraph);
    
    document.body.appendChild(x);
    inputField.value = "";
})