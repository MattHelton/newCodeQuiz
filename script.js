//Dom elements from html file
var startBtn = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionsScreen = document.getElementById("example-question");
var gameOverScreen = document.getElementById("game-over-screen");


//data variables
var questions = [
    {q: "What is the name of the Philadelphia NFL team?", 
    a:{ a: "Eagles", b: "Falcons", c: "Patriots", d: "Cardinals"}, 
        correctAnswer: "Eagles"
    },
    {q: "What is the name of the Philadelphia MLB team?", 
    a:{ a: "Red Sox", b: "Braves", c: "Phillies", d: "Tigers"}, 
        correctAnswer: "Phillies"
    },
    {q: "What is the name of the Philadelphia NBA team?", 
    a:{ a: "Suns", b: "Lakers", c: "Pistons", d: "76ers"}, 
        correctAnswer: "76ers"
    },
    {q: "What is the name of the Philadelphia NHL team?", 
    a:{ a: "Penguins", b: "Flyers", c: "Capitols", d: "Lightning"}, 
        correctAnswer: "Flyers"
    },
];

var currentQuestionIndex = 0


// startGame()
//     renderQuestion(questions[currentQuestionIndex])



startBtn.addEventListener("click", function(){


    console.log("button clicked")
    startScreen.style.display = "none"
    questionsScreen.style.display = "block";
    questionsScreen.innerHTML = questions[0]
 
})

