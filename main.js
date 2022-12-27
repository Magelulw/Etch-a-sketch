const paintingWall = document.querySelector(".paintingWall");
const container = document.querySelector(".container");

wallWidthSize = paintingWall.style.width = "40rem";
wallHeightSize = paintingWall.style.height = "40rem";

let gridSize = 8;


let wallWidth = wallWidthSize.replace("rem","");
let wallHeight = wallHeightSize.replace("rem","");

paintingWall.style["grid-template-columns"] = `repeat(${gridSize},1fr)`;


for(let row = 0; row < gridSize; row++){
    for(let col = 0; col < gridSize; col++){
        const gridCell = document.createElement("div");
        
        gridCell.classList.add("grid", 'grid-cell')

        gridCell.addEventListener("mousedown",() => {
            gridCell.style.background = "yellow"
        })

        paintingWall.appendChild(gridCell)
    }
}


const gridCells = document.querySelectorAll(".grid-cell");
gridCells.forEach((cell) =>{
    cell.style.width = `${(wallWidth / gridSize)}rem`;
    cell.style.height = `${(wallHeight / gridSize)}rem`;
});