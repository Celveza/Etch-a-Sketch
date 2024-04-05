// Variables




// Functions


//Create grid at start
document.addEventListener("DOMContentLoaded", function(){
    newGrid(16,"#000000")
    draw()
});

//Create the grid

function newGrid(size, color) {
    let grid = document.querySelector(".grid");
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    let howBig = size*size;

    for (let i = 0; i < howBig; i++) {
        let container = document.createElement("div");
        container.classList.add("squares")
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
        newGrid(newSize, "black");
    }
    else {
        alert("Size must ve between 2 and 100 :D");
    }
})

//Draw

let colorBar = document.querySelector("#colorChange");
colorBar.addEventListener("change", (e) => {
    newColor = e.target.value;
})

function draw(color = "black") {
    let grid = document.querySelectorAll(".squares");
    grid.forEach((grid) => {
        grid.addEventListener("mouseover", (e) => {
            grid.backgroundColor = "black"
        })
    })
}

function startDrawing(size = 16) {
    clearGrid();
    createGrid(size);
    draw("black");
}