//all variables in html
var content = document.getElementById("#content");
var headline = document.getElementById("#headline");
var question = document.getElementById("#question");
var answerBox = document.getElementById("#answerBox");
var answerList = document.getElementById("#answerList");
var answer1 = document.getElementById("#answer1");
var answer2 = document.getElementById("#answer2");
var answer3 = document.getElementById("#answer3");
var answer4 = document.getElementById("#answer4");

//variables for time
var timeElement = document.getElementById("#time");
var secondsLeft = 300;

//var for score
var correct = 0;
var incorrect = 0;
var highScore = 0;


//array of quiz questions full of objects
//need a for loop to run through this array?
var quizQuestions = [
    {
        question : "Which of the following is NOT a primitive data type?" ,
        one : "string",
        two : "array", 
        three : "boolean",
        four : "undefine",
        correct : "array",
    },
    {
        question : "Which of the following expresses that two variables have the same value but not the same type?",
        one : "===",
        two : "!==",
        three : "==", 
        four : "&&",
        correct : "==",
    },
    {
        question : "What kind of brackets are used to express array?",
        one : "{}",
        two : "()",
        three : "[]", 
        four : "\/",
        correct : "[]",
    },
    {
        question : "In a 'for loop', what does the first 'i=' statement represent?",
        one : "How long the function will run",
        two : "Where to begin along the index", 
        three : "The number of items in the index",
        four : "The importance of the loop in context",
        correct : "Where to begin along the index",
    },
    {
        question : "If you wanted to access one section of an array without effecting the original array, which method would you use?",
        one : ".concat",
        two : ".pop",
        three : ".sort",
        four : ".slice", 
        correct : ".slice",
    },
    {
        question : "What is the first thing JavaScript does when reading a new page?",
        one : "Scans global scope", 
        two : "Executes functions",
        three : "Reads from top down",
        four : "Hardwires into the internet",
        correct : "Scans global scope",
    }
]

//run game
startGame()


//functions
function startTimer() {
    var timer = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remain.";

        if(secondsLeft === 0) {
            clearInterval(timer);
            alert("Game Over")
        }
    }, 1000);
}

function startQuestioning() {
    
    question.textContent = quizQuestions.child[0],
    answer1.textContent = quizQuestions.child[1]
    answer2.textContent = quizQuestions.child[2];
    answer3.textContent = quizQuestions.child[3];
    answer4.textcontent = quizQuestions.child[4];

    for ( i = 0; i < 7; i++)
    
    answer1.addEventListener("click" function() {
        var checkAnswer
        if ( quizQuestions.child[1] === quizQuestions.child[5] ) {
            checkAnswer = "y"
        } else {
            checkAnswer = "n"
        }
        return checkAnswer;
    })
    answer2.addEventListener("click" function() {
        var checkAnswer
        if ( quizQuestions.child[2] === quizQuestions.child[5] ) {
            checkAnswer = "y"
        } else {
            checkAnswer = "n"
        }
        return checkAnswer;
    })
    answer3.addEventListener("click" function() {
        var checkAnswer
        if ( quizQuestions.child[3] === quizQuestions.child[5] ) {
            checkAnswer = "y"
        } else {
            checkAnswer = "n"
        }
        return checkAnswer;
    })
    answer4.addEventListener("click" function() {
        var checkAnswer
        if ( quizQuestions.child[4] === quizQuestions.child[5] ) {
            checkAnswer = "y"
        } else {
            checkAnswer = "n"
        }
        return checkAnswer;
    })
    
    function judgement(checkAnswer) {
        switch(checkAnswer) {
            case "y":
                correct++;
                break;
            case "n":
                incorrect++
                secondsLeft-15
                break;
            default:
                break;
    
        }
    }
}



function startGame() {
    var gameStart = confirm("Would you like to start the quiz?")
    if (gameStart) {
        //startTimer();
        startQuestioning();
    }
}

