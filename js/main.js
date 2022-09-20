let burgue = document.querySelector(".hamburgue")
let menu = document.querySelector(".menu")

var percent = document.querySelector(".percent");
var progress = document.querySelector(".progress");
var container = document.querySelector(".loader");
var count = 4;
var per = 16;
var loading = setInterval(animate, 50);


// MenuToglle
burgue.addEventListener("click", () =>{
    // menu.style.right = "0"
    menu.classList.toggle("menu-toggle")
})

// PRELOADER
function animate(){
    if(count == 100 && per == 400){
        clearInterval(loading);
        container.classList.add("loader-animation")
    } else{
        per = per + 4;
        count = count + 1;
        progress.style.width = per + "px";
        percent.textContent = count + "%";
    }
}