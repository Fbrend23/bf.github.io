document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        const intro1 = document.getElementsByClassName("intro1");
        for (let i = 0; i < intro1.length; i++){
            intro1[i].style.opacity ="1";
    }
}, 1000);
})

document.addEventListener("DOMContentLoaded",function(){
    setTimeout(function(){
        document.getElementsByClassName("intro2")[0].style.opacity = "1";
    }, 2000);
})
