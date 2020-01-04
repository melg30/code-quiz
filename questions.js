var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "<script>", "<scripting>"],
    answer: "<script>"
  },
  {
    question: "How do you call a function named myFunction?",
    choices: ["Call function myFunction()", "myFunction()", "call myFunction"],
    answer: "myFunction()"
  },
  {
    question: "How does a FOR loop start?",
    choices: [
      "for (i <= 5; i++",
      "for (i = 0; i <= 5; i++",
      "for (i = 0; i <= 5)",
      "for i = 1 to 5"
    ],
    answer: "for (i = 0; i <= 5; i++"
  }
];

var score = 0;

for (var i = 0; i < questions.length; i++) {
  var response = window.prompt(questions[i].question);
  if (response === questions[i].answer) {
    score++;
  } else {
    score--;
  }
}

alert("You got " + score + "/" + questions.length);
