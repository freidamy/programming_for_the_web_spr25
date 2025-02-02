// questions
var questionList = [
    {
        question: "What borough is Central Park in?",
        answer: "Manhattan"
    },
    {
        question: "What color are NYC taxi cabs?",
        answer: "Yellow"
    },
    {
        question: "What year did the NYC subway system open?",
        answer: "1904"
    },
    {
        question: "What is the name of NYC's most famous statue?",
        answer: "Statue of Liberty"
    },
    {
        question: "How many boroughs are in NYC?",
        answer: "5"
    }
];

// question
var randomNumber = Math.floor(Math.random() * questionList.length);

var randomQuestion = questionList[randomNumber];

// question prompt
window.onload = function() {

    var userGuess = prompt(randomQuestion.question);
    
    // response
    alert("You answered " + userGuess + ". The correct answer was " + randomQuestion.answer);
};