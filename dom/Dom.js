//when a page loads, the browser creates a dom tree of all elements.

//Javascript can use DOM methods to read or modify these elements.

// common actions

// document.getElementById("name").innerText="praveen"

// document.getElementById("name").style.color = "purple"

// document.getElementById("name").style.color = "purple"

// const main = document.getElementById("name")
// main.style.backgroundColor= "red"
// main.style.textAlign= "center"
// console.log(main);

// 1. Document Properties

// console.log(document.title);
// console.log(document.body);

// 2. Element Properties

// let element = document.getElementById("name")
// console.log(element);
// console.log(element.innerText);
// console.log(element.innerHTML);
// console.log(element.textContent);

// 3. Form Element Properties

//   let form = document.getElementById("myForm");

//   // Listen for submit
//   form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent page reload

//     let name = document.getElementById("username").value;
//     console.log("User entered:", name);
//   });

//4. window / Screen Properties

//5. Style Properties

// let elements = document.getElementById("no");
// elements.style.color = "purple";

// function add() {
//   let input = document.getElementById("to-do");
//   let task = input.value.trim();
//   if (task === "") {
//     alert("enter a task ");
//     return;
//   }
//   let li = document.createElement("li");
//   li.textContent = task;
//     document.getElementById("todo-list").appendChild(li);
//     input.value = "";
// }


