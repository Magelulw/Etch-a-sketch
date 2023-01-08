let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const DEFAULT_COLOR = "black";
const DEFAULT_GRID_SIZE = 16;
const DEFAULT_MODE = "default";

let currentColor = DEFAULT_COLOR;
let currentGridSize = DEFAULT_GRID_SIZE;
let currentMode = DEFAULT_MODE;



function setCurrentColor(newClr){
    currentColor = newClr
}

const paintingWall = document.querySelector(".paintingWall");
const container = document.querySelector(".container");

const elTitle = document.querySelector(".title")
//* all the buttons and features;
const penColorChanger = document.querySelector("#colorPicker");
const rainbowClr = document.querySelector("#rainbowMode");
const eraserBtn = document.querySelector("#eraser");
const clearBtn = document.querySelector("#clear");
const sizeValue = document.querySelector("#sizeValue")
const gridSizeSlider = document.querySelector("#gridSizeMaker");

clearBtn.onclick = () => reloadGrid()
gridSizeSlider.onchange = (e) => updateGridSize(e.target.value)
gridSizeSlider.onmousemove = (e) => gridSizeText(e.target.value)


rainbowClr.onclick = () => currentMode = "rainbow";
eraserBtn.onclick = () => currentMode = "eraser";

penColorChanger.oninput = (e) => setCurrentColor(e.target.value)
penColorChanger.onchange = () => currentMode = "penChanger";



function updateGridSize(value){
    clearGrid(value);
    createGrid(value);
    setGridSize(value);
    gridSizeText(value);

}


function gridSizeText(size){
    sizeValue.textContent = `${size} x ${size}`
}

function reloadGrid(){
    clearGrid()
    createGrid(currentGridSize)
    setGridSize(currentGridSize)
    gridSizeText(currentGridSize)
    gridSizeSlider.value = currentGridSize
}

function clearGrid(){
    paintingWall.innerHTML = ""
}

function createGrid(size){
    paintingWall.style.gridTemplateColumns = `repeat(${size},1fr)`
    paintingWall.style.gridTemplateRows = `repeat(${size},1fr)`

    for(let i = 0; i < (size * size); i++){
        let gridCell = document.createElement("div");
        
        gridCell.addEventListener("mouseover", setMode);
        gridCell.addEventListener("click", setMode);

        paintingWall.appendChild(gridCell).classList.add("grid", 'grid-cell');
    }
}

function setGridSize(size){
    let wallWidthSize = paintingWall.style.width = "40rem";
    let wallHeightSize = paintingWall.style.height = "40rem";


    wallWidth = wallWidthSize.replace("rem","");
    wallHeight = wallHeightSize.replace("rem","");

    const gridCells = document.querySelectorAll(".grid-cell");

    gridCells.forEach((cell) =>{
        cell.style.width = `${(wallWidth / size)}rem`;
        cell.style.height = `${(wallHeight / size)}rem`;
    });
}


function setMode(e){
    if(e.type === "mouseover" && !mouseDown) return;

    if(currentMode === "rainbow"){
        let rgb1 = Math.floor(Math.random () * 256)
        let rgb2 = Math.floor(Math.random () * 256)
        let rgb3 = Math.floor(Math.random () * 256)

        e.target.style.background = `rgb(${rgb1},${rgb2},${rgb3})`
    }else if(currentMode === "eraser"){
        e.target.style.background = "white"
        elTitle.style.color = "white"       
    }
    else if(currentMode === "penChanger"){
        e.target.style.background = currentColor
        elTitle.style.color = currentColor
    }else if(currentMode === "default"){
        e.target.style.background = "black"
        elTitle.style.color = "black"
    }
}


window.onload = () => {
    updateGridSize(currentGridSize)
    gridSizeText(currentGridSize)
    gridSizeSlider.value = currentGridSize
}