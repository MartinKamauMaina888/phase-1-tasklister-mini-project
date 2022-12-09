document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function handleSubmit(e){
   
    e.preventDefault()
  
    var list = document.createElement("li");

    var receivedValue = document.getElementById("new-task-description").value;

    list.appendChild(document.createTextNode(receivedValue));
   
    document.getElementById("tasks").appendChild(list);
    
    document.getElementById("new-task-description").value = "";

    var span = document.createElement("SPAN");

    span.className = "closebtn";

    span.appendChild(document.createTextNode("\u00D7"));

    list.appendChild(span);
    
    var closebtn = document.getElementsByClassName("closebtn");

    for (i = 0; i < closebtn.length; i++) {

      closebtn[i].onclick = function () {

        this.parentElement.remove()

      }
    }
    
  }

  const form = document.querySelector("#create-task-form")
  
  form.addEventListener('submit',handleSubmit)
});


