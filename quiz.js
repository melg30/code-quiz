var areagame = document.querySelector("#game");
var showTimer = document.querySelector("#Timer");
var showHighScore = document.querySelector("#High-Score");
var startButton = document.querySelector("#startButton");
var inputArea = document.querySelector("#input");
var nameArea = document.querySelector("#nameButton");
var secondsLeft = 75;
var currentQ = 0;
var timer;
var score = 0;

// 1) when start button is clicked first question begins (addeventlistener)
startButton.addEventListener("click", quizQuestions);

// & timer starts countdown (75 seconds)

function Countdown() {
  secondsLeft--;
  console.log("secondsLeft", secondsLeft);

  showTimer.textContent = "Time: " + secondsLeft;
  showTimer.setAttribute("style", "color:#ffffff");
  showTimer.className("timer");
  console.log(showTimer);

  if (secondsLeft < 1) {
    gameEnd();
  }
}

// function to loop through the array of questions

function quizQuestions() {
  console.log("start");
  timer = setInterval(Countdown, 1000);

  nextQuestion();
}

function nextQuestion() {
  console.log("next question", currentQ, questions.length);

  areagame.innerHTML = "";
  if (currentQ >= questions.length) {
    console.log("game end");
    gameEnd();
  } else {
    console.log("ELSE");
    var questionEl = document.createElement("p");
    questionEl.setAttribute("style", "margin: 20px auto");
    questionEl.textContent = questions[currentQ].title;
    areagame.appendChild(questionEl);

    for (var i = 0; i < questions[currentQ].choices.length; i++) {
      console.log("i", i);
      var choice = document.createElement("button");
      choice.textContent = questions[currentQ].choices[i];
      choice.setAttribute("class", "btn btn-secondary");
      choice.setAttribute("value", questions[currentQ].choices[i]);
      choice.setAttribute(
        "style",
        "margin:20 auto; color:white; background-color:darkslateblue; text-align:center;"
      );
      choice.onclick = verify;
      areagame.appendChild(choice);
    }
  }
}
function verify() {
  console.log(this);
  console.log(this.value);

  var answer = questions[currentQ].answer;
  console.log(answer);
  if (this.value === answer) {
    this.setAttribute("style", "color:white; background-color:green");
  } else {
    this.setAttribute("style", "color:white; background-color:red");
    secondsLeft = secondsLeft - 15;
  }

  currentQ++;
  setTimeout(nextQuestion, 1000);
}
function gameEnd() {
  // clear the timer
  clearInterval(timer);

  var input = document.createElement("input");
  input.textContent = inputField;
  input.setAttribute("style", "margin:0 auto; text-align:center;");
  var inputField = input.setAttribute("id", "inputField");
  inputArea.appendChild(input);
  var nameBtn = document.createElement("button");
  ("");
  nameBtn.textContent = "Submit Name";
  nameBtn.setAttribute("class", "btn btn-secondary");
  nameBtn.setAttribute(
    "style",
    "color:#ffffff; padding:20px; background-color:darkslateblue"
  );
  nameArea.appendChild(nameBtn);
  nameBtn.addEventListener("click", function() {
    // save in local storage
    alert("Score is now saved! Go to High Scores to view your score");
    var HighScore = JSON.parse(localStorage.getItem("High Scores")) || [];
    console.log(HighScore);

    var inputName = document.getElementById("inputField").value;
    var scoreToSave = { name: inputName, score: secondsLeft };
    HighScore.push(scoreToSave);

    var HighScoreStringified = JSON.stringify(HighScore);

    localStorage.setItem("High Scores", HighScoreStringified);
    console.log(HighScore);

    var highScoreArea = document.querySelector("#high-score");
    console.log(highScoreArea);
    var HighScoreList = document.createElement("li");
    HighScoreList.textContent = HighScore;
    highScoreArea.appendChild(HighScoreList);

    localStorage.getItem(HighScore);
  });
}
