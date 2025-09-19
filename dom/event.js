// let container = document.getElementById("container");

// let newPara = document.createElement("p");
// let list = document.getElementById("list");
// let item = document.getElementById("remove")



// // newPara.textContent = "Hello I am Naveen"
// // // console.log(newPara);


// // container.appendChild(newPara)

// list.removeChild(item);

// Event handling *******

// let button = document.getElementById("click-btn");


// button.addEventListener("click", (e) => {
//     alert("button was clicked")


// })

let list = document.getElementById("list");

let addBtn = document.getElementById("add");

let count = 0;

addBtn.addEventListener("click", () => {
    let create = document.createElement("li");
    create.textContent = "item" + count++;

    let delBtn = document.createElement("button")
    delBtn.textContent = "delete";


    delBtn.addEventListener("click", () => {
        
        create.remove();
    })
    create.appendChild(delBtn)
    list.appendChild(create);
})








