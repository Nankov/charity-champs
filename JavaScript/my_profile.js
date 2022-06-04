const button = document.getElementById("btn-my-charities");
const participants_window = document.getElementById("charities-window");
const x_button = document.getElementsByClassName("x-button")[0];

button.addEventListener("click", toggle_charities);
x_button.addEventListener("click", toggle_charities);

function toggle_charities() {
    participants_window.classList.toggle("hidden")
    document.querySelector("section").classList.toggle("opacity");
    document.querySelector("header").classList.toggle("opacity");
    document.querySelector(".navbar").classList.toggle("opacity");
};