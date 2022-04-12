//targeting
const input = document.querySelectorAll(".task_input")
const add_button = document.querySelectorAll(".task_add")
const task_list = document.querySelectorAll(".task_container")
const filterOption = document.querySelectorAll(".selection")

//click event adding

add_button[0].addEventListener("click", addData)
task_list[0].addEventListener("click", doneDel)
filterOption[0].addEventListener("click", filter_todo)

//input adding function
function addData(event) {
  //prevent form submitting
  event.preventDefault()

  if (input[0].value) {    
    const li_container = document.createElement("div") //create list container which will contain li and 2 buttons.

    li_container.classList.add("liDiv")

    //create li
    const listItem = document.createElement("li")
    listItem.classList.add("data")
    listItem.innerText = input[0].value
    li_container.appendChild(listItem) //add the li in list container div

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

//complete and uncomplete buttons

function doneDel(event) {
  const targetbyClick = event.target

  //delete item
  if (targetbyClick.classList[0] === "delButton") {
    const del_Div = targetbyClick.parentElement
    del_Div.remove()
  } else if (targetbyClick.classList[0] === "checkButton") { //completed item
    const checked_div = targetbyClick.parentElement
    //console.log(checked_div)
    checked_div.classList.toggle("task_done")

    targetbyClick.disabled = true //disable the done button after clicking the done button.
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