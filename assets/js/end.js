var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", function() {
    saveScoreBtn.disabled = !username.value;
})

function saveHighScore(e) {
    console.log("Clicked the save button!");
    e.preventDefault();

    var score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };

    highScores.push(score);
    highScores.sort(function(a, b){b.score - a.score});
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("../../index.html");
}