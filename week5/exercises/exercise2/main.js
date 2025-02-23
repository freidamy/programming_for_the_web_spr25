class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    
    this.size = 30;
    this.speedX = 2;
    this.speedY = 2;
    
    this.color = [255, 100, 100];
  }
  
  display() {
    fill(...this.color);  
    circle(this.x, this.y, this.size);
  }
  
  move() {
    
    this.x += this.speedX;  
    this.y += this.speedY;
    

    if (this.x >= width || this.x <= 0) {
      this.speedX = -this.speedX;
    }
    if (this.y >= height || this.y <= 0) {
      this.speedY = -this.speedY;
    }
  }
}

const circles = [];

function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < 5; i++) {
    const randomX = random(width);
    const randomY = random(height);
    circles.push(new Circle(randomX, randomY));
  }
}


function draw() {
  background(220);
  
  circles.forEach(circle => {
    circle.display();
    circle.move();
  });
}