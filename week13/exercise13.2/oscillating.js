let circles = [];

function setup() {
  createCanvas(600, 400);
  noStroke();
  for (let i = 0; i < 10; i++) {
    circles.push(new OscillatingCircle(
      width / 2 + i * 30 - 150, 
      height / 2, 
      20 + i, 
      random(TWO_PI)
    ));
  }
}

function draw() {
  background(245);
  for (let c of circles) {
    c.update();
    c.display();
  }
}

class OscillatingCircle {
  constructor(x, y, baseSize, offset) {
    this.x = x;
    this.y = y;
    this.baseSize = baseSize;
    this.offset = offset;
  }

  update() {
    this.size = this.baseSize + sin(frameCount * 0.05 + this.offset) * 10;
  }

  display() {
    fill(120, 160, 255, 180);
    ellipse(this.x, this.y, this.size);
  }
}
