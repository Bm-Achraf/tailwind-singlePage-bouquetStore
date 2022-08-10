const menu = document.getElementById("menu")
const menu_logo = document.getElementById("menu_logo");

menu_logo.addEventListener('click', function(){
    if(menu.classList.contains("hidden"))
    menu.classList.remove("hidden")

    else
    menu.classList.add("hidden")
})