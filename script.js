//globally vars
let timer;
let time = 120;
let questionindex = 0;
let score = 0;
//question array

let highScores = [];

if (isNaN(localStorage.getItem("score"))) {
    localStorage.setItem("score",0);
}





const quizQuestions = [
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
];

const saveInitials = () => {
    //put savedInitials and score into variable highScores
    let savedInitials = document.querySelector("#initials").value
    //make variable for a string of ?:::jasd;fja;se
    localStorage.setItem("initials", savedInitials)
    localStorage.setItem("score", score)


}

const endQuiz = () => {
    //hide first question container
    document.querySelector("#questions").classList.add("hide");

    //show first end screen
    document.querySelector("#end-screen").classList.remove("hide");

    //stop timer
    clearInterval(timer);
    //show score
    // document.querySelector(#final-score).textContent = score;
};

const handleAnswerClick = (event) => {
    //check if answer is right
    const questionWeWrote = quizQuestions[questionindex].correct;
    const questionSelected = event.target.textContent
    if (questionWeWrote === questionSelected) {
        score++;
    } else {
        score--;
        time -= 15;
    }

    //show the next question
    questionindex++;

    if (questionindex === quizQuestions.length) {
        endQuiz();
    } else {
        loadQuestion();
    }
}


//load the questions
const loadQuestion = () => {
    //store the target question
    const currentQuestion = quizQuestions[questionindex];

    //create questions markup in a string form
    const questionMarkUp = `
        <h2 id="question-title">${currentQuestion.question}</h2>
        <div id="choices" class="choices">
            <div class="answer-choice">${currentQuestion.one}</div>
            <div class="answer-choice">${currentQuestion.two}</div>
            <div class="answer-choice">${currentQuestion.three}</div>
            <div class="answer-choice">${currentQuestion.four}</div>
        </div>
    `;
    
    //convert the string into html and add it into the question container
    document.querySelector("#questions").innerHTML = questionMarkUp;

    //add answerchoice event listner
    const choices = document.querySelectorAll(".answer-choice");
    for (let i = 0; i < choices.length; i++) {
        //answer choice click
        choices[i].addEventListener("click", (event) => {handleAnswerClick(event)})
    }
}

const startQuiz = () => {
    //show first question container
    document.querySelector("#questions").classList.remove("hide");

    //load the first question
    loadQuestion();

    //start timer
    timer = setInterval(function() {
        //decrease the time
        time--;
        //show the new time going down
        document.querySelector("#time").textContent = time;

        //end quiz
        if (time <= 0) {
            endQuiz();
        }
    }, 1000);
    
    //hide start screen mark up
    document.querySelector("#start-screen").classList.add("hide");
}

//on click start game button
document.querySelector("#start").addEventListener("click",startQuiz);

// //on click saves initials
document.querySelector("#submit").addEventListener("click,saveInitials")



// //all variables in html
// var content = document.getElementById("#content");
// var headline = document.getElementById("#headline");
// var question = document.getElementById("#question");
// var answerBox = document.getElementById("#answerBox");
// var answerList = document.getElementById("#answerList");
// var answer1 = document.getElementById("#answer1");
// var answer2 = document.getElementById("#answer2");
// var answer3 = document.getElementById("#answer3");
// var answer4 = document.getElementById("#answer4");

// //variables for time
// var timeElement = document.getElementById("#time");
// //time is inside headline
// var secondsLeft = 300;

// //var for score
// var correct = 0;
// var incorrect = 0;
// var checkAnswer;


// //array of quiz questions full of objects
// //need a for loop to run through this array?


// //run game
// startGame()

// //functions
// function startTimer() {
//     var timer = setInterval(function() {
//         secondsLeft--;
//         timeElement.textContent = secondsLeft + " seconds remain.";

//         if(secondsLeft === 0) {
//             clearInterval(timer);
//             alert("Game Over")
//         }
//     }, 1000);
// }

// function startQuestioning(event) {
    
//     question.textContent = quizQuestions[i].child[0].value
//     answer1.textContent = quizQuestions[i].child[1].value
//     answer2.textContent = quizQuestions[i].child[2].value
//     answer3.textContent = quizQuestions[i].child[3].value
//     answer4.textcontent = quizQuestions[i].child[4].value

//     // document.body.child.child.child[0].child.child[0].appendchild(quizQuestions)

//     for ( i = 0; i < 7; i++) {
//         judgement(checkAnswer);
//     }
// }

// function judgement(checkAnswer) {
//     switch(checkAnswer) {
//         case "y":
//             correct++;
//             break;
//         case "n":
//             incorrect++
//             secondsLeft-15
//             break;
//         default:
//             break;

//     }

//     //next question
// }

// function startGame() {
//     var gameStart = confirm("Would you like to start the quiz?");
//     if (gameStart) {
//         startTimer();
//         startQuestioning();
//     }
// }

// a.addEventListener("click" function(event) {
//     if ( quizQuestions.child[1].value  === quizQuestions.child[5].value ) {
//         checkAnswer = "y"
//     } else {
//         checkAnswer = "n"
//     }
//     return checkAnswer;
// });
// answer2.addEventListener("click" function(event) {
//     var checkAnswer
//     if ( quizQuestions.child[2].value === quizQuestions.child[5].value ) {
//         checkAnswer = "y"
//     } else {
//         checkAnswer = "n"
//     }
//     return checkAnswer;
// });
// answer3.addEventListener("click" function(event) {
//     var checkAnswer
//     if ( quizQuestions.child[3].value === quizQuestions.child[5].value ) {
//         checkAnswer = "y"
//     } else {
//         checkAnswer = "n"
//     }
//     return checkAnswer;
// });
// answer4.addEventListener("click" function(event) {
//     var checkAnswer
//     if ( quizQuestions.child[4].value === quizQuestions.child[5].value ) {
//         checkAnswer = "y"
//     } else {
//         checkAnswer = "n"
//     }
//     return checkAnswer;
// });