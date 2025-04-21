let flowers = [];
let sounds = [];

function preload() {
  sounds[0] = loadSound('sound1.mp3');
  sounds[1] = loadSound('sound2.mp3');
}

function setup() {
  createCanvas(600, 400);
  noStroke();

  flowers.push({ x: 200, y: 200, r: 50, soundIndex: 0 });
  flowers.push({ x: 400, y: 200, r: 50, soundIndex: 1 });
}

function draw() {
  background(255);

  for (let f of flowers) {
    drawFlower(f.x, f.y, f.r);
  }
}

function drawFlower(x, y, r) {
  fill(255, 150, 200);
  for (let i = 0; i < 8; i++) {
    let angle = TWO_PI / 8 * i;
    let petalX = x + cos(angle) * r;
    let petalY = y + sin(angle) * r;
    ellipse(petalX, petalY, r, r);
  }

  fill(255, 220, 100);
  ellipse(x, y, r, r); 
}

function mousePressed() {
  for (let f of flowers) {
    let d = dist(mouseX, mouseY, f.x, f.y);
    if (d < f.r * 1.5) {
      if (sounds[f.soundIndex].isPlaying()) {
        sounds[f.soundIndex].stop();
      }
      sounds[f.soundIndex].play();
    }
  }
}


