const paintingWall = document.querySelector(".paintingWall");
const container = document.querySelector(".container")

wallWidthSize = paintingWall.style.width = "45rem"
wallHeightSize = paintingWall.style.height = "45rem"

let gridSize = 80;

// paintingWall.style["background-color"] = `repeat(${gridSize},1fr)`
let wallWidth = wallWidthSize.replace("rem","")
let wallHeight = wallHeightSize.replace("rem","")

paintingWall.style["grid-template-columns"] = `repeat(${gridSize},1fr)`

console.log(wallWidth / gridSize)



for(let row = 0; row < gridSize; row++){
    for(let col = 0; col < gridSize; col++){
        const newDiv = document.createElement("div");

        newDiv.style.width = `${(wallWidth / gridSize)}rem`
        newDiv.style.height = `${(wallHeight / gridSize)}rem`

        newDiv.classList.add("grid")
        paintingWall.appendChild(newDiv)
    }
}


