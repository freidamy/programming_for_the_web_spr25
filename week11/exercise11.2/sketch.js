function setup() {
  createCanvas(600, 600);
  background(245);
  stroke(30);
  noFill();

  let spacing = 40;

  for (let x = spacing; x < width; x += spacing) {
    for (let y = spacing; y < height; y += spacing) {
      let d = dist(x, y, width / 2, height / 2);
      let size = map(d, 0, width / 2, 20, 2);
      ellipse(x, y, size, size);
    }
  }
}
