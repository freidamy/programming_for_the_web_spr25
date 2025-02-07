// setup
function setup() {
  // canvas for 3x3 grid
  createCanvas(600, 600);
  // stop animation
  noLoop();
}

// main 
function draw() {

  background(220);
  
  // 3x3 grid of tiles
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {

      let xPos = x * 200;
      let yPos = y * 200;
      
      // variations
      let tileColor = color(random(50, 200), random(50, 200), 255);
      let rotationAngle = random(0, PI/2);
      let scaleVal = random(0.8, 1.2);
      
      // tile at position
      push();
      translate(xPos, yPos);
      createTile(tileColor, rotationAngle, scaleVal);
      pop();
    }
  }
}

// pattern function
function createTile(tileColor, angle, s) {
  // main square
  fill(tileColor);
  noStroke();
  rect(0, 0, 200, 200);
  
  // transformations
  rotate(angle);
  scale(s);
  
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
}