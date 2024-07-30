function getGridSize()
{
    const gridSize = prompt("Enter the Grid Size please");
    if (gridSize < 0 || gridSize > 100) {
        alert("Invalid Size! Number has to be [0, 100]");
        gridSize = getGridSize();
    }
    return gridSize;
}

function createRows(rowContainer, gridElement, gridSize) {
    while (gridSize-- > 0) {
        let rowElement = document.createElement('div');
        rowElement.classList.add('row');
        gridElement.appendChild(rowElement);
        rowContainer.push(rowElement);
    }
}

function getTile(gridSize) {
    let tileElement = document.createElement('button');
    tileElement.classList.add('tile');
    let size = 960 / (gridSize);
    tileElement.style.width = `${size}px`;
    tileElement.style.height = `${size}px`;

    return tileElement
}

function createTiles(rowContainer, gridSize) {
    rowContainer.forEach(row => {
        for (let i = 0; i < gridSize; i++) {
            row.appendChild(getTile(gridSize));
        }
    });
}

function randomColor(tileElement) {
    const colorArray = [];
    for (let i = 0; i < 3; i++) {
        colorArray.push(Math.floor(Math.random() * 256));
    }
    console.log(tileElement);
    tileElement.style.backgroundColor = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
}

const gridSize = getGridSize();
const gridElement = document.querySelector('.grid-container');
const rowContainer = [];

createRows(rowContainer, gridElement, gridSize);
createTiles(rowContainer, gridSize);

const tilesList = document.querySelectorAll('.tile');
tilesList.forEach(tile => {
    tile.addEventListener("mouseover", (e) => {
        randomColor(e.target);
    });
})
