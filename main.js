const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#BAD";
ctx.lineWidth = 10;
ctx.lineCap = "round";
ctx.lineJoin = "round";


let lastX = 0;
let lastY = 0;
let hue = 0;
let isDrawing = false;


function draw(e){
if(!isDrawing) return;
console.log(e)

ctx.beginPath();

ctx.moveTo(lastX, lastY);

ctx.lineTo(e.offsetX, e.offsetY);
ctx.stroke();
[lastX, lastY] = [e.offsetX, e.offsetY]
}

canvas.addEventListener("mousedown", (e) =>{
    isDrawing = true;
    [lastX,lastY] = [e.offsetX, e.offsetY]
})

canvas.addEventListener("mousemove",draw);
canvas.addEventListener("mouseout", () => isDrawing = false);
canvas.addEventListener("mouseup", () => isDrawing = false);
