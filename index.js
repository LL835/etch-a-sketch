const gridContainer = document.querySelector("#grid-container");
const wipeBoardButton = document.querySelector(".wipe-board");
const changeDimensionsButton = document.querySelector(".change-dimensions");
const showGridLinesButton = document.querySelector(".show-grid-lines");

createGrid(32) // Default grid that is created immediately on opening is 32x32 squares
let gridContainerItems = document.querySelectorAll(".grid-item");

function createGrid(size) {
    for (let i = 0; i < size ** 2; i++) {
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        const newGridItem = document.createElement("div");
        newGridItem.classList.add("grid-item");
        newGridItem.addEventListener('mouseover', () => {
            newGridItem.style.background = "black";
        })
        gridContainer.appendChild(newGridItem)
    }
}


function wipeBoard() {
    /*for (let i = 0; i < gridContainerItems.length; i++) {
        gridContainerItems[i].style.background = "white"
    } */
    gridContainerItems.forEach (item => item.style.background ="white")
}


function changeDimensions(newDimension) {
    // remove existing board
    gridContainerItems.forEach(item => item.remove());
    // ask for new dimesions
    let dimensions = prompt("Enter a number between 1 and 100");
    let valueAccepted = false;
    while (valueAccepted === false) {
        if (dimensions >= 1 && dimensions <= 100) {
            valueAccepted = true;
        } else {dimensions = prompt("Enter a number between 1 and 100");
    }
    }
    // replace existing board with new board
    createGrid(dimensions)
    gridContainerItems = document.querySelectorAll(".grid-item")
}


function showGridLines() {
    if (gridContainerItems[0].style.border === "") {
    gridContainerItems.forEach (item => item.style.border = "solid 1px rgba(83, 83, 83, 0.3)");
    } else {
    gridContainerItems.forEach (item => item.style.border = "");
    }
}


wipeBoardButton.addEventListener('click', wipeBoard);
changeDimensionsButton.addEventListener('click', changeDimensions );
showGridLinesButton.addEventListener('click', showGridLines);

