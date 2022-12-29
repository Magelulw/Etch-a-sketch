# Etch-a-sketch
This is my etch a skecth projet from the Odein project





//! colors the grid
gridCell.addEventListener("mousemove",() => {
        gridCell.style.background = "yellow"
})

//! clears all the grid Color
clearBtn.addEventListener("click", () => {
        gridCell.forEach(cell => {
            cell.style.background = "red"
    })
})
