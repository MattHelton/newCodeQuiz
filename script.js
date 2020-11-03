//Dom elements from html file
var startBtn = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionsScreen = document.getElementById("example-question");
var gameOverScreen = document.getElementById("game-over-screen");

//data variables
var questionsArray = [
    "What is the name of the MLB team in Philadelphia", "Second Question", "Third Question"
];

startBtn.addEventListener("click", function(){
    var btn1 = document.createElement("button"); btn1.innerHTML= "Phillies";
    document.body.appendChild(btn1)
    var btn2 = document.createElement("button"); btn2.innerHTML= "Eagles";
    document.body.appendChild(btn2)
    var btn3 = document.createElement("button"); btn3.innerHTML= "76ers";
    document.body.appendChild(btn3)
    var btn4 = document.createElement("button"); btn4.innerHTML= "Flyers";
    document.body.appendChild(btn4)

    if(btn1 === "click"){
        createElement("p")
        btn1.innerHTML = "Correct"
        document.body.appendChild(btn1)
    }
    
  

    console.log("button clicked")
    startScreen.style.display = "none"
    questionsScreen.style.display = "block";
    questionsScreen.innerHTML = questionsArray[0]
   
})

