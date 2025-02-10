let questionInput;
let submitButton;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let incorrectCount = 0;
let restartButton;

//  questions
let statements = [
    { question: 'What borough is Central Park in?', answer: 'manhattan'},
    { question: 'What borough is Coney Island in?', answer: 'brooklyn'},
    { question: 'What borough is Yankee Stadium in?', answer: 'bronx'},
    { question: 'What borough is JFK Airport in?', answer: 'queens'},
    { question: 'Which borough is connected to Manhattan by the Verrazzano Bridge?', answer: 'staten island'}
];

// original array for restart functionality
let activeStatements;

function next() {
    if (activeStatements.length < 1) {
        gameWon();
        return null;
    }

    const randomIndex = Math.floor(Math.random() * activeStatements.length);
    const question = activeStatements[randomIndex];

    activeStatements.splice(randomIndex, 1);
    return question;
}

function checkAnswer() {
    const userAnswer = questionInput.value().toLowerCase().trim();
    if (currentQuestion && userAnswer === currentQuestion.answer) {
        response = 'Correct!';
        responseColor = 'green';
        currentQuestion = next();
        if (currentQuestion) {
            message = currentQuestion.question;
        }
    } else {
        response = 'Incorrect. Try again!';
        responseColor = 'red';
        incorrectCount++;
        
        if (incorrectCount >= 5) {
            gameLost();
        }
    }
    questionInput.value(''); // clear input after submission
}

function gameWon() {
    message = 'Congratulations! You won the NYC Trivia!';
    hideGameControls();
    showRestartButton();
}

function gameLost() {
    message = 'Game Over! Too many incorrect answers.';
    hideGameControls();
    showRestartButton();
}

function hideGameControls() {
    questionInput.hide();
    submitButton.hide();
}

function showGameControls() {
    questionInput.show();
    submitButton.show();
}

function showRestartButton() {
    restartButton.show();
}


// reset game 
function restartGame() {
    activeStatements = [...statements];
    incorrectCount = 0;
    currentQuestion = next();
    message = currentQuestion.question;
    response = '';
    showGameControls();
    restartButton.hide();
}

function setup() {
    createCanvas(800, 600);
    
    // heading
    heading = createElement('h1', 'NYC Trivia');
    heading.position(100, 50);
    
    // input field
    questionInput = createInput('');
    questionInput.position(100, 350);
    questionInput.size(200);
    
    // submit button
    submitButton = createButton('Submit');
    submitButton.position(questionInput.x + questionInput.width + 10, questionInput.y);
    submitButton.mousePressed(checkAnswer);
    
    // restart button 
    restartButton = createButton('Restart Game');
    restartButton.position(100, 400);
    restartButton.mousePressed(restartGame);
    restartButton.hide();
    
    // game
    activeStatements = [...statements];
    currentQuestion = next();
    message = currentQuestion.question;
}

function draw() {
    background('lightblue');
    
    // question
    fill('purple');
    textSize(24);
    text(message, 100, 300);
    
    // feedback
    if (response) {
        fill(responseColor);
        textSize(20);
        text(response, 100, 250);
    }
    
    // incorrect answers count
    fill('black');
    textSize(16);
    text(`Incorrect answers: ${incorrectCount}/5`, 100, 200);
}




