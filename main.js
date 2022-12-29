const paintingWall = document.querySelector(".paintingWall");
const container = document.querySelector(".container");

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//* all the buttons and features;
const penColorChanger = document.querySelector("#colorPicker");
const rainbowClr = document.querySelector("#rainbowMode");
const eraserBtn = document.querySelector("#eraser");
const clearBtn = document.querySelector("#clear");
const sizeValue = document.querySelector("#sizeValue")
const gridRange = document.querySelector("#gridSize")

let gridSize = gridRange.value;
let currentMode = "default";

sizeValue.textContent = `${gridSize} x ${gridSize}`


penColorChanger.oninput = () => {currentMode }
rainbowClr.onclick = () => {currentMode = "rainbow"};
eraserBtn.onclick = () => {currentMode = "eraser"};
clearBtn.onclick = () => setGridToTheStart()



paintingWall.style["grid-template-columns"] = `repeat(${gridSize},1fr)`;

function runGame(){
    createGrid()
    setGridSize()
}
runGame()

function setGridToTheStart(){
    clearGrid()
    createGrid()
    setGridSize()
}


function createGrid(){
    for(let cells = 0; cells < (gridSize * gridSize); cells++){
            let gridCell = document.createElement("div");

            gridCell.addEventListener("mouseover",changeClr);
            gridCell.addEventListener("mousedown",changeClr);

            paintingWall.appendChild(gridCell).classList.add("grid", 'grid-cell');
        }
}




//*change Color Mode
function changeClr(e){
    if(e.type === "mouseover" && !mouseDown) return;
    
    if(currentMode === "rainbow"){
        let clr1 = Math.floor(Math.random() * 256);
        let clr2 = Math.floor(Math.random() * 256);
        let clr3 = Math.floor(Math.random() * 256);
    
        e.target.style.background = `rgb(${clr1},${clr2},${clr3})`;
    }else if(currentMode === "default"){
        e.target.style.background = "black"
    }else if(currentMode === "eraser"){
        e.target.style.background = "white"
    }
    else if(currentMode === "penChanger"){
        e.target.style.background = value
    }

}



//*clears the grid Color
function clearGrid(){
    paintingWall.innerHTML = ""
}

//*sets the grid Size for each cell
function setGridSize(){
    wallWidthSize = paintingWall.style.width = "40rem";
    wallHeightSize = paintingWall.style.height = "40rem";


    let wallWidth = wallWidthSize.replace("rem","");
    let wallHeight = wallHeightSize.replace("rem","");

    const gridCells = document.querySelectorAll(".grid-cell");

    gridCells.forEach((cell) =>{
        cell.style.width = `${(wallWidth / gridSize)}rem`;
        cell.style.height = `${(wallHeight / gridSize)}rem`;
    });
}
