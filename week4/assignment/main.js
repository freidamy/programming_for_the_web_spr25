let startingX = 200;
let startingY = 100;
let cardWidth = 100;    
let cardHeight = 150;   
let myCards = [];       
let startingId = 0;
let score = 0;
let cardBackImage;     


function preload() {
    cardBackImage = loadImage("assets/ace_puppy.jpg");
}

function setup() {
    createCanvas(1000, 500);
    
    // grid of cards
    for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 4; col++) {
            // new card object
            myCards.push({ 
                x: startingX, 
                y: startingY, 
                id: startingId
            });
            
            startingX += 150;
            startingId++;
        }

        startingY += 150;
        startingX = 200;  
    }
    
    console.log(myCards);
}

function draw() {

    background(0);
    
    // game title
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text("Memory Game", width/2, 50);
    
    //score
    textSize(20);
    text("Score: " + score, width/2, 80);
    
    // all cards
    for (let card of myCards) {
        // back image for each card
        image(cardBackImage, card.x, card.y, cardWidth, cardHeight);
    }
}


