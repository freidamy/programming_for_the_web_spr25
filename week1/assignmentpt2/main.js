function setup() {
  createCanvas(400, 400);
  
  // prompts
  heroName = prompt("Name your Batman snow hero:" , "bruce");
  heroColor = prompt("Choose a color for the hero (white/black):", "white");
}

function draw() {
  background('darkblue');
  
  translate(width/2, height/2);
  
  // body
  fill(heroColor);
  circle(0, 0, 150);        // Bottom
  circle(0, -100, 100);     // Middle
  circle(0, -200, 75);      // Head
  
  // batman mask
  fill('black');
  triangle(-40, -200, 40, -200, 0, -250);
  
  // eyes
  fill('white');
  circle(-20, -200, 20);
  circle(20, -200, 20);
  
  // bat symbol
  fill('black');
  beginShape();
    vertex(0, -100);
    vertex(-20, -90);
    vertex(-10, -70);
    vertex(10, -70);
    vertex(20, -90);
  endShape(CLOSE);
  
  // arms
  stroke('black');
  strokeWeight(5);
  line(-75, -150, -150, -100);
  line(75, -150, 150, -100);
  
  // name
  textSize(20);
  fill('white');
  text(heroName, -50, 150);
}