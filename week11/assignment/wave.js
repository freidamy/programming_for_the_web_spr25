function setup() {
  createCanvas(600, 400);
  stroke(50, 100, 200);
  noFill();
}

function draw() {
  background(255);
  for (let i = 0; i < height; i += 25) {
    beginShape();
    for (let x = 0; x < width; x += 10) {
      let y = i + sin(x * 0.05 + frameCount * 0.05) * 20;
      vertex(x, y);
    }
    endShape();
  }
}
