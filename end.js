var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", function() {
    saveScoreBtn.disabled = !username.value;
})

function saveHighScore(e) {
    console.log("Clicked the save button!");
    e.preventDefault();
};