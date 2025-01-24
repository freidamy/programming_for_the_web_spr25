function setup() {
   // Creates a canvas 600 pixels wide
  // and 400 pixels high.
  createCanvas(600, 400);
}

function draw() {
  background(135, 206, 235);

  fill("yellow");
  stroke("orange");
  strokeWeight(20);

  //sun in top-right corner
  circle(550, 50, 100);

  stroke(0);
  strokeWeight(1);

  //grass starts here
  fill("green");
  rect(0, 200, 600, 200);

  //new p5 reference used here
  rotate(QUARTER_PI / 2);

  textSize(75);
  text("🐶", 100, 250);
}