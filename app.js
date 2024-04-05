// Variables
const grid = document.querySelector(".grid");
const eraseG = document.querySelector("#erase");
const changeG = document.querySelector("#change");
const colorBar = document.querySelector("#colorChange");
const randomizeCheck = document.querySelector("#randomize");

let randomize = false;
let size = 16;
let defaultColor = "#000000";

// ---------------------------------------------

//Create grid at start
document.addEventListener("DOMContentLoaded", function(){
    startDrawing()
});

//Create the grid

function newGrid(size = 16) {
    const cellSize = 700 / size;
    for (let i = 0; i < size; i++) {
        const columns = document.createElement("div");
        columns.classList.add("square");
        columns.style.height = `${cellSize}px`;
        columns.style.width = `${cellSize}px`;

        for (let j = 0; j < size; j++) {
            let toBePainted = document.createElement("div");
            toBePainted.classList.add("square");
            toBePainted.style.height = `${cellSize}px`;
            toBePainted.style.width = `${cellSize}px`;
            columns.appendChild(toBePainted);
        }
        grid.appendChild(columns);
    }
}

//Remove the grid

function removeGrid() {
    grid.innerHTML = "";
    colorBar.value = defaultColor;
}

// Draw

function draw(color = defaultColor) {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover",(e) => {

            if (randomize) {
                e.target.style.backgroundColor = "#" + Math.random().toString(16).substring(-6);
            }
            else {
                e.target.style.backgroundColor = color;
            }
        })
    })
}

function startDrawing(size = 16) {
    removeGrid();
    newGrid(size);
    draw(defaultColor);
}




// -------------------------------------



colorBar.addEventListener("input", (e) => {
    defaultColor = e.target.value;
    draw(defaultColor);
})

changeG.addEventListener("click", () => {
    size = prompt("Insert the size of the grid");
    if (size <= 100 && size >= 0) {
        startDrawing(size);
    }
    else {
        alert("Please insert a value between 0 and 100 :D");
    }
})

eraseG.addEventListener("click", () => {
    startDrawing(size);
})

randomizeCheck.addEventListener("click", (event) => {
    randomize = event.target.checked;
});
