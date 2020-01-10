var startButton = document.getElementById("start");

startButton.addEventListener('click', startQuiz);

/* Quiz */
function startQuiz() {
    console.log('started');
}

/* Quiz Timer */
document.getElementById("start").addEventListener("click", function() {
    var timeLeft = questionArray.length*15;

    var downloadTimer = setInterval(function quizTimer() {
        document.getElementById("timer").innerHTML = "Time: " + timeLeft + " seconds left.";

        timeLeft -= 1;
        if (timeLeft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("timer").innerHTML = "Time is up!"
        }
    }, 1000);

    console.log(timer);
});

/* High Score */
