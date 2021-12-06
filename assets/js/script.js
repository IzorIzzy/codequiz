var startQuizDiv = document.getElementById("startQuiz");
var questionsDiv = document.getElementById("questions");
var endQuizDiv = document.getElementById("endQuiz");
var startBtn = document.getElementById("startBtn");
var saveBtn = document.getElementById("saveBtn");
var highScorebtn = document.getElementById("saveBtn");
var timerSpan = document.getElementById("timer");
var choicesEl = document.getElementById("choices");
var currentQuestionIndex = 0;
var saveTask= document.getElementById("task");


var correct = 0;

var time = 60;
var timerId;

startBtn.addEventListener("click", function () {
    startQuizDiv.setAttribute("class", "hide")
    questionsDiv.removeAttribute("class")

    timerId = setInterval(timerStart, 1000)
    displayQuestions()
})

function timerStart() {
    time--;
    timerSpan.textContent = time;
}

var questions = [
    {
        title: "Here is where you ask the question",
        choices: ["Stuff", "More Stuff", "Other Stuff", "Blahhh"],
        answer: "Blahhh"
    },
    {
        title: "Question 2",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        answer: "choice3"
    },
    {
        title: "Question 3",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        answer: "choice3"
    },
    {
        title: "Question 4",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        answer: "choice3"
    },
    {
        title: "question 5",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        answer: "choice3"
    }

]

console.log(questions[currentQuestionIndex])
function displayQuestions() {
    var currentQuestion = questions[currentQuestionIndex]

    var titleElement = document.getElementById("questionTitle")
    titleElement.textContent = currentQuestion.title

    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(function (choice) {
        var choiceBtn = document.createElement("button")
        choiceBtn.setAttribute("value", choice)

        choiceBtn.textContent = choice;

        choiceBtn.onclick = handleQuestionClick;

        choicesEl.append(choiceBtn)

    })
}

function handleQuestionClick() {
    console.log(this.value)
    // testing the clicked buttons value aagainst the answer from the questions array
    // this is what happens if we get a wrong answer
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 10;


        if (time < 0) {
            time = 0;
        }

        timerSpan.textContent = time;

        // this is what happens if we get a correct answer
    } else {
        correct++;

    }
    currentQuestionIndex++;
    console.log(currentQuestionIndex)

    if(currentQuestionIndex === questions.length){
        endQuiz()
    } else {
        displayQuestions()
    }
}

function endQuiz(){
    questionsDiv.setAttribute("class", "hide")
    endQuizDiv.removeAttribute("class")

    clearInterval(timerId)


}

function saveScore(){
// dividing amount of correct questions against all questions
let score = correct/questions.length;
// using toFixed method to get 2 digits after the decimal point
let newScore = score.toFixed(2)
// using split method to split string at 0. and [1] represents the leftover that we want to use
let removedDecimalScore = newScore.split("0.")[1]
console.log("USER SCORE", removedDecimalScore)
let finalScore = removedDecimalScore + "%"
    
let initialsEl = document.getElementById("initialsInput")
let initials = initialsEl.value

let newUserScore = {
    initials: initials,
    score: finalScore
}
console.log(newUserScore)
}


saveBtn.onclick = saveScore;
    

{

}

function saveTask(){
    window.localStorage.setItem("task", JSON.stringify(tasks));
    task= newUserScore(localStorage)
}



