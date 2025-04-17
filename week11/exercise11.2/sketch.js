let spacing = 40;

function setup() {
  createCanvas(600, 600);
  noFill();
  stroke(30);
}

function draw() {
  background(245);
  let time = millis() * 0.002; // smooth time-based animation

  for (let x = spacing; x < width; x += spacing) {
    for (let y = spacing; y < height; y += spacing) {
      let d = dist(x, y, width / 2, height / 2);
      let baseSize = map(d, 0, width / 2, 5, 20);
      let animatedSize = baseSize + sin(time + d * 0.05) * 4;
      ellipse(x, y, animatedSize);
    }
  }
}
