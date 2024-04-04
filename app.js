//Create grid at start
document.addEventListener("DOMContentLoaded", function(){
    newGrid(16)
});

//Create the grid
function newGrid(size) {
    let grid = document.querySelector(".grid");
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    let howBig = size*size;
    for (let i = 0; i < howBig; i++) {
        let container = document.createElement("div");
        container.addEventListener("mouseover", () => {
            container.style.backgroundColor = `black`
        })
        grid.insertAdjacentElement("beforeend",container);
    }
}

//Clear the grid.
let eraseB = document.querySelector("#erase");
eraseB.addEventListener("click", () => {
    let remove = document.querySelectorAll(".grid div");
    remove.forEach(container => {
        container.style.backgroundColor= "white";
    });
} )

//Change the size of grid.

let changeG = document.querySelector("#change");
changeG.addEventListener("click", () => {
    let newSize = prompt("What's the new size?");
    if (newSize <= 100 && newSize >= 2) {
        newGrid(newSize);
    }
    else {
        alert("Size must ve between 2 and 100 :D");
    }
})