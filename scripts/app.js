let menu = document.querySelector(".menu");
let icon = document.querySelector(".nav_icon");

icon.addEventListener("click",function (){
    if(this.classList.contains("fa-bars")){
        this.classList = "fa fa-times nav_icon";
        menu.style.left = "0";
    } else {
        this.classList = "fa fa-bars nav_icon";
        menu.style.left = "-220px";
    }
});