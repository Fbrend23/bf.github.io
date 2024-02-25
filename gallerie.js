const filterButton = document.querySelectorAll(".btn");
const galleryItems = document.querySelectorAll(".container-img");


filterButton.forEach(button => {
    button.addEventListener("click", function() {
        const filterValue = button.getAttribute("data-filter");

// Mettre à jour le bouton actif
        filterButton.forEach(btn => {
            btn.classList.remove("selected");
        });
            button.classList.add("selected");

// Filtrer
        galleryItems.forEach(item => {
            if (filterValue === "all" || item.classList.contains(filterValue)){
                item.classList.remove("hidden");
            } 
            else{
                item.classList.add("hidden");
                
            }
        })
    })
})


const galleryImg = document.querySelectorAll(".container-img > img")

galleryImg.forEach(img =>{
    img.addEventListener("click", toggleFullScreen);
});

// Fonction pour afficher l'image en plein écran
function toggleFullScreen() {
    const elem = this; 
    if (!document.fullscreenElement) {
        
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}