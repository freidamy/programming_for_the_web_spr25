let sound1, sound2;

function preload() {

  sound1 = loadSound('sound1.mp3');
  sound2 = loadSound('sound2.mp3');
}

function setup() {
  createCanvas(400, 400);
  background(200);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("Click left or right side to play a sound", width / 2, height / 2);
}

function mousePressed() {
  // Play sound only after it's loaded
  if (mouseX < width / 2 && sound1.isLoaded()) {
    sound1.play();
  } else if (mouseX >= width / 2 && sound2.isLoaded()) {
    sound2.play();
  }
}
