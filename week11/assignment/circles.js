function setup() {
  createCanvas(600, 600);
  noLoop();
  noStroke();
  background(255);
  
  let spacing = 60;
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      let radius = noise(x * 0.01, y * 0.01) * 40 + 10;
      fill(100, 150, 255, 180);
      ellipse(x, y, radius);
    }
  }
}
