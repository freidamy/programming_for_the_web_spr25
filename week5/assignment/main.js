let startingX = 200;
let startingY = 100;
let cardWidth = 100;
let cardHeight = 150;
let myCards = [];
let startingId = 0;
let score = 0;
let cardBackImage;
let cardImages = [];
let flippedCards = [];
let matchedPairs = 0;

function preload() {
    cardBackImage = loadImage("assets/ace_puppy.jpg");
    for (let i = 0; i < 4; i++) {
        cardImages.push(loadImage("assets/cardimage.png"));
    }
}

function setup() {
    createCanvas(1000, 500);
    let cardPairs = [assets/catpumpkin.png, assets/broccolihouse.png];
    cardPairs = shuffle(cardPairs);
    
    for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 4; col++) {
            myCards.push({ 
                x: startingX, 
                y: startingY, 
                id: startingId,
                image: cardPairs[startingId],
                isFlipped: false,
                isMatched: false
            });
            startingX += 150;
            startingId++;
        }
        startingY += 150;
        startingX = 200;
    }
}

function draw() {
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text("Memory Game", width / 2, 50);
    textSize(20);
    text("Score: " + score, width / 2, 80);
    
    for (let card of myCards) {
        if (card.isFlipped || card.isMatched) {
            image(card.image, card.x, card.y, cardWidth, cardHeight);
        } else {
            image(cardBackImage, card.x, card.y, cardWidth, cardHeight);
        }
    }
    
    if (matchedPairs === myCards.length / 2) {
        textSize(40);
        fill(0, 255, 0);
        text("You Win!", width / 2, height / 2);
    }
}

function mousePressed() {
    for (let card of myCards) {
        if (!card.isFlipped && !card.isMatched && 
            mouseX > card.x && mouseX < card.x + cardWidth && 
            mouseY > card.y && mouseY < card.y + cardHeight) {
            
            card.isFlipped = true;
            flippedCards.push(card);
            
            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 1000);
            }
            break;
        }
    }
}

function checkMatch() {
    if (flippedCards[0].image === flippedCards[1].image) {
        flippedCards[0].isMatched = true;
        flippedCards[1].isMatched = true;
        matchedPairs++;
        score += 10;
    } else {
        flippedCards[0].isFlipped = false;
        flippedCards[1].isFlipped = false;
        score -= 5;
    }
    flippedCards = [];
}

