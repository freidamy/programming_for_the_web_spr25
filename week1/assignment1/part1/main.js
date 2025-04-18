function setup() {
  createCanvas(400, 400);
  
  // prompt size
  size = prompt("How big should the snow creature be? (50-200)");
  size = parseInt(size);
}

function draw() {
  background(220);
  translate(width/2, height/2);
  
  // white snow man
  fill('white');
  
  // body
  circle(0, 0, size);        
  circle(0, -size/2, size/2); 
  circle(0, -size, size/3);   
  
  // arms
  stroke('orange');
  strokeWeight(4);
  line(-size/2, -size/4, -size, -size/2);
  line(size/2, -size/4, size, -size/2);
}