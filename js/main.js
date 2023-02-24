let button = document.querySelector(".meny_button")
let menu = document.querySelector(".meny1")
let fade = document.querySelector(".fade_layer")


button.addEventListener("click", showMenu)
fade.addEventListener("click", showMenu)
menu.addEventListener("click", showMenu)

function showMenu(){
    menu.classList.toggle("show")
    fade.classList.toggle("visible")
}