document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        const intro1 = document.getElementsByClassName("intro1");
        for (let i = 0; i < intro1.length; i++){
            intro1[i].style.opacity ="1";}}, 1000);
    setTimeout(function(){
        document.querySelector(".intro2").style.opacity = "1";}, 2000);
})

const menu = document.getElementById("hamburger");
const bar = document.querySelectorAll(".bar1, .bar2, .bar3");

bar.forEach(function(bar){
menu.addEventListener("click", function() {
    bar.classList.toggle("click");
})
});
