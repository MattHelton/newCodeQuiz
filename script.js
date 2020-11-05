//Dom elements from html file
var startBtn = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionsScreen = document.getElementById("example-question");
var gameOverScreen = document.getElementById("game-over-screen");
var answers = []
var index = 0
var score = 0
// var userAnswer =
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


// startGame()
//     renderQuestion(questions[currentQuestionIndex])



startBtn.addEventListener("click", function () {


    console.log("button clicked")
    startScreen.style.display = "none"
    questionsScreen.style.display = "block";
    questionsScreen.innerHTML = questions[index].q
    //display the answer buttons
    //how do we create our html buttons dynamically using javascript
    // questionsScreen.textContent = questions[0].answers

    for (var i = 0; i < questions[index].answers.length; i++) {
        var answerButton = document.createElement("BUTTON");
        answerButton.innerHTML = questions[index].answers[i];
        answerButton.setAttribute("value", questions[index].answers[i])
        questionsScreen.appendChild(answerButton)
    } document.addEventListener("click", (function (event) {
        console.log(event.target.value)
        if (event.target.value === questions[index].correctAnswer) {
            console.log("correct")
            score++
            console.log(score)
        }
        else if(event.target.value !== questions[index].correctAnswer){
            console.log("incorrect")
            
        }
    }))









    // for (var i = 0; i < questions.length; i++) {
    //     console.log(questions[i])
    //     for (var j = 0; j < questions[i].answers.length; j++){
    //         var answerButton = document.createElement("BUTTON");
    //     answerButton.innerHTML = questions[i].answers[j];
    //     questionsScreen.appendChild(answerButton)
    // }
    //     }

    // if (userAnswer === questions[i].correctAnswer){
    //     console.log("it worked")
    // }
})
//step1 addeventlistener to button that checks if answer is correct or wrong
//step2 figure out a way to take me to the next question
//one solution might be to check the current question when start or an answer button is clicked and move to the next question.

