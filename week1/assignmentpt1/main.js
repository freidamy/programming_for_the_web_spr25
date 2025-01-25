function setup() {
  createCanvas(400, 400);
  
  // Ask user for size
  size = prompt("How big should the snow creature be? (50-200)");
  size = parseInt(size);
}

function draw() {
  background(220);
  translate(width/2, height/2);
  
  // White snow creature
  fill('white');
  
  // Three circles for body
  circle(0, 0, size);        // Bottom
  circle(0, -size/2, size/2);  // Middle
  circle(0, -size, size/3);    // Head
  
  // Two arms
  stroke('orange');
  strokeWeight(4);
  line(-size/2, -size/4, -size, -size/2);
  line(size/2, -size/4, size, -size/2);
}