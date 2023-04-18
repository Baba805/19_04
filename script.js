let input = document.querySelector("input")
let add = document.querySelector(".add");
let todo = document.querySelector(".todo_item");
let deletee = document.querySelector(".delete");

document.body.append(todo)
let item;
var dltBtn;

add.addEventListener("click", (e) => {
    e.preventDefault();
    if(todo.innerText == "No ToDo Item"){
        todo.innerText = "";
    }
    item = document.createElement("div");
    item.style.margin = "10px"
   let newitem = document.createElement("div");
    newitem.style.display = "inline-block"
    newitem.innerText = input.value;
    dltBtn = document.createElement("button");
    dltBtn.setAttribute("class", "fa-solid fa-trash");
    dltBtn.style.color = "#590ba8";
    dltBtn.style.display = "inline-block"
    item.append(newitem, dltBtn);
    todo.append(item)
    dltBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (confirm("Are you sure to delete?") == true) {
            item.remove();
        }

    })
    input.value = "";

});



deletee.addEventListener("click", (e) => {
    e.preventDefault();

    if (confirm("Are you sure to delete?") == true) {
        todo.remove();

    }
})

