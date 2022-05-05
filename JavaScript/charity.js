const select_menu = document.getElementById("more-options");
const participants_window = document.getElementsByClassName("participants-window")[0];
const x_button = document.getElementsByClassName("x-button")[0];

select_menu.addEventListener("change", () => { if (select_menu.value == 1) toggle_participants() });
x_button.addEventListener("click", toggle_participants);

function toggle_participants() {
    participants_window.classList.toggle("hidden")
    document.querySelector("section").classList.toggle("opacity");
    document.querySelector("header").classList.toggle("opacity");
    document.querySelector(".navbar").classList.toggle("opacity");
};

