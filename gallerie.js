const filterButton = document.querySelectorAll(".btn");
const galleryItems = document.querySelectorAll(".item");


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
                item.style.display = "flex";
            } 
            else{
                item.style.display = "none";
            }
        })
    })
})

