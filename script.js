//Dom elements from html file
var startBtn = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionsScreen = document.getElementById("example-question");
var gameOverScreen = document.getElementById("game-over-screen");
var answers =[]
var correctAnswer = ""
//data variables
var questions = [
    {
        q: "What is the name of the Philadelphia NFL team?",
        answers: ["Eagles", "Falcons", "Patriots", "Cardinals"],
        correctAnswer: "Eagles"
    },
    {
        q: "What is the name of the Philadelphia MLB team?",
        answers: ["Red Sox", "Braves", "Phillies", "Tigers"],
        correctAnswer: "Phillies"
    },
    {
        q: "What is the name of the Philadelphia NBA team?",
        answers: ["Suns", "Lakers", "Pistons", "76ers"],
        correctAnswer: "76ers"
    },
    {
        q: "What is the name of the Philadelphia NHL team?",
        answers: ["Penguins", "Flyers", "Capitols", "Lightning"],
        correctAnswer: "Flyers"
    },
];

var currentQuestionIndex = 0


// startGame()
//     renderQuestion(questions[currentQuestionIndex])



startBtn.addEventListener("click", function () {


    console.log("button clicked")
    startScreen.style.display = "none"
    questionsScreen.style.display = "block";
    questionsScreen.innerHTML = questions[0].q
    //display the answer buttons
    //how do we create our html buttons dynamically using javascript
    // questionsScreen.textContent = questions[0].answers

    for (var i = 0; i < questions[0].answers.length; i++) {
        console.log(questions[0].answers[i])
        var answerButton = document.createElement("BUTTON");
        answerButton.innerHTML = questions[0].answers[i];
        questionsScreen.appendChild(answerButton)
    }
    if (questions === correctAnswer){
        console.log("it worked")
    }
})
//step1 addeventlistener to button that checks if answer is correct or wrong
//step2 figure out a way to take me to the next question
//one solution might be to check the current question when start or an answer button is clicked and move to the next question.

