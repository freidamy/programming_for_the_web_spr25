function setup() {
  createCanvas(600, 600);
  background(255);
  translate(width / 2, height / 2);
  noStroke();
  
  let shapes = 24;
  for (let i = 0; i < shapes; i++) {
    push();
    rotate(TWO_PI * i / shapes);
    fill(200, 100, 250, 180);
    ellipse(150, 0, 50, 50);
    pop();
  }
}