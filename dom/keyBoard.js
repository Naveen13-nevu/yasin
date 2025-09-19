let form = document.getElementById("myForm")

let msg = document.getElementById("msg");

form.city.addEventListener("change", () => {
    msg.textContent = "city selected " + form.city.value;

})
form.userName.addEventListener("focus", () => {
    form.userName.style.background = "aquamarine";
})


form.userName.addEventListener("blur", () => {
    form.userName.style.background = "white";
})

//submit event

form.addEventListener("submit", (event) => {
    event.preventDefault();
    msg.textContent = "Form Submited by " + form.userName.value;

})








