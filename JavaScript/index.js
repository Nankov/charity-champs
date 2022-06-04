function changeVisibility () {
    var categories = document.getElementById("categories");
    var filters = document.getElementById("filters");
    var categoriesHeading = document.getElementById("categories-heading");

    if (filters.classList.contains("no-display")){
        categories.classList.add("no-display");
        filters.classList.remove("no-display");
        categoriesHeading.innerText = "Филтри";
    }
    else{
        filters.classList.add("no-display");
        categories.classList.remove("no-display");
        categoriesHeading.innerText = "Категории";
    }
}