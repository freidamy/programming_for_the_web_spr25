//setup
function setup() {
  // canvas
  createCanvas(200, 200);

  noLoop();
};

// draw
function draw() {
  background(255);
  // pattern
  createTile();
};

// pattern
function createTile() {
  // blue square
  fill('blue');
  noStroke();
  rect(0, 0, 200, 200);
  
  // pink circle
  fill('pink');
  circle(50, 50, 80);
  
  // yellow circle
  fill('yellow');
  circle(150, 150, 80);
  
  // lines
  stroke('white');
  strokeWeight(2);
  line(0, 100, 200, 100);
  line(100, 0, 100, 200);
  
  // small circles
  noStroke();
  fill('cyan');
  circle(30, 170, 20);
  circle(170, 30, 20);
};