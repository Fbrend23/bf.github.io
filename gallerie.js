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
const modal = document.getElementById("myModal")
const span = document.getElementsByClassName("close")[0]

// Récupération des images
galleryImg.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        document.getElementById("modalImage").src = this.src;
    });
});

// Fermer le modal 
span.addEventListener("click", function() {
    modal.style.display = "none";
});

// Fermer le modal lorsque l'utilisateur clique en dehors de celui-ci
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});