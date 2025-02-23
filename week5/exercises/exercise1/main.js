let x = 0;
let y = 0;
let squareColor;

function setup() {
  createCanvas(400, 400);
  background(220);
  squareColor = color(255, 0, 0);  
  
  
  setInterval(moveSquare, 500);
}


function drawColoredSquare(x, y, squareColor) {
  fill(squareColor);
  square(x, y, 50);  
}


function moveSquare() {
  drawColoredSquare(x, y, squareColor);
  
 
  x = x + 50;
  

  if (x >= width) {
    x = 0;      
    y = y + 50;
  }
  

  if (y >= height) {
    clearInterval(moveSquare);
  }
}


function keyPressed() {
  if (key === 'r') {
    squareColor = color(255, 0, 0);  
  }
  if (key === 'b') {
    squareColor = color(0, 0, 255); 
  }
}