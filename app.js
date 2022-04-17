//targeting
const input = document.querySelectorAll(".task_input")
const add_button = document.querySelectorAll(".task_add")
const task_list = document.querySelectorAll(".task_container")
const filterOption = document.querySelectorAll(".selection")

//click event adding

add_button[0].addEventListener("click", addData)
task_list[0].addEventListener("click", doneDelEdit)
filterOption[0].addEventListener("click", filter_todo)

//input adding function
function addData(event){
  //prevent form submitting
  event.preventDefault()

  if (input[0].value) {    
    const li_container = document.createElement("div") //create list container which will contain li and 2 buttons.

    li_container.classList.add("liDiv")

    //create li
    const listItem = document.createElement("li")
    listItem.classList.add("data")
    /*listItem.innerText = input[0].value*/
    li_container.appendChild(listItem) //add the li in list container div
    
    //create input in li
    var liInput=document.createElement("input")
    liInput.classList.add("liInputCSS")
    liInput.value=input[0].value
    liInput.type="text"
    liInput.setAttribute("readonly","readonly")
    listItem.appendChild(liInput)

    //create edit button
    const edit=document.createElement("button")
    edit.classList.add("editButton")
    edit.innerText="Edit"
    li_container.appendChild(edit) //add the edit button in list container div

    //create done button
    const done = document.createElement("button")
    done.classList.add("checkButton")
    done.innerText = "Done"
    li_container.appendChild(done) //add the done button in list container div

    //create delete button
    const del = document.createElement("button")
    del.classList.add("delButton")
    del.innerText = "Delete"
    li_container.appendChild(del) //add the delete button in list container div

    task_list[0].appendChild(li_container)//add the whole list container div in the ul div

    input[0].value = "" //To clear the input box after every time we add the input
  } else {
    alert("Please enter the task.")
  }
}

//edit, complete and uncomplete buttons

function doneDelEdit(event) {
  const targetbyClick = event.target
  console.log("ss")
  //delete item
  if (targetbyClick.classList[0] === "delButton") {
    const del_Div = targetbyClick.parentElement
    del_Div.remove()
  } else if (targetbyClick.classList[0] === "checkButton") { //completed item
    const checked_div = targetbyClick.parentElement
    const targetLi3=(targetbyClick.previousElementSibling).previousElementSibling //targeting li
    const targetInput3= targetLi3.firstChild //targeting input inside li for line through
    
    checked_div.classList.toggle("task_done")
    targetInput3.classList.toggle("doneInput")

    targetbyClick.disabled = true //disable the done button after clicking the done button.
    targetbyClick.previousElementSibling.disabled=true //disable the edit button after marking the task done!
    
  }else if(targetbyClick.classList[0]==="editButton"){ //edit the item
    if(targetbyClick.innerText==="Edit"){
      targetbyClick.innerText="Save"
      const targetLi1=targetbyClick.previousElementSibling //targeting li 
      const targetInput1= targetLi1.firstChild //targeting input inside li
      targetInput1.removeAttribute("readonly")
      targetInput1.focus()
    }else{
      const targetLi2=targetbyClick.previousElementSibling //targeting li 
      const targetInput2= targetLi2.firstChild //targeting input inside li
      targetbyClick.innerText="Edit"
      targetInput2.setAttribute("readonly","readonly")
      
    }
    
  }
  
}

//filter todo list
function filter_todo(event) {
  const targetLiDivs = document.getElementsByClassName("liDiv")

  switch (event.target.value) {
    case "all":
      for (let i = 0; i < targetLiDivs.length; i++) {
        targetLiDivs[i].style.display = "flex"
      }
      break

    case "completed":
      for (let i = 0; i < targetLiDivs.length; i++) {
        if (targetLiDivs[i].classList.contains("task_done")) {
          targetLiDivs[i].style.display = "flex"
        } else {
          targetLiDivs[i].style.display = "none"
        }
      }
      break

    case "uncompleted":
      for (let i = 0; i < targetLiDivs.length; i++) {
        if (targetLiDivs[i].classList.contains("task_done")) {
          targetLiDivs[i].style.display = "none"
        } else {
          targetLiDivs[i].style.display = "flex"
        }
      }
      break
  }
}


