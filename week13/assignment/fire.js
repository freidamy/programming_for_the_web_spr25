let flames = [];

function setup() {
  createCanvas(600, 400);
  noStroke();
  for (let i = 0; i < 20; i++) {
    flames.push(new Flame(random(width/2 - 50, width/2 + 50), height - 70, random(40, 80), i));
  }
}

function draw() {
  background(20, 20, 30);

  drawLogs(); 

  for (let f of flames) {
    f.update();
    f.display();
  }
}

function drawLogs() {
  fill(90, 60, 40); 
  rectMode(CENTER);
  push();
  translate(width / 2, height - 40);
  rotate(radians(-15));
  rect(0, 0, 120, 15, 5);
  pop();

  push();
  translate(width / 2, height - 40);
  rotate(radians(15));
  rect(0, 0, 120, 15, 5);
  pop();
}

class Flame {
  constructor(x, y, baseHeight, index) {
    this.x = x;
    this.y = y;
    this.baseHeight = baseHeight;
    this.index = index;
    this.offset = random(TWO_PI);
  }

  update() {
    this.height = this.baseHeight + sin(frameCount * 0.1 + this.offset) * 15;
    this.alpha = 200 + sin(frameCount * 0.15 + this.offset) * 55;
    this.colorShift = sin(frameCount * 0.1 + this.offset) * 25;
  }

  display() {
    fill(255, 140 + this.colorShift, 0, this.alpha);
    ellipse(this.x, this.y - this.height / 2, 20, this.height);
  }
}
