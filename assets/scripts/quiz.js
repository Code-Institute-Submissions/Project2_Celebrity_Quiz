let globalQuestionClicks = 0; // global variable used in checkAnswer(event) function so question answers cannot be clicked more than once per round
let globalQuestionsAnswered = 0; // global variable used in checkAnswer(event) function. Increased by 1 per question answered when it == 5 quiz ends
let globalImageClicks = 0; // global variable used in clickCheck() function so if more than one section flipped reducePoints() is called
let globalPreventClick1 = 0; //global variables used in flipImage() function to prevent image section 1 being clicked more than once
let globalPreventClick2 = 0; //global variables used in flipImage() function to prevent image section 2 being clicked more than once
let globalPreventClick3 = 0; //global variables used in flipImage() function to prevent image section 3 being clicked more than once
let globalPreventClick4 = 0; //global variables used in flipImage() function to prevent image section 4 being clicked more than once
// additional global variable in LoadQuestion() called 'randomNumber'

// Import Array from array.js

import { array } from './array.js';

// Adds event Listeners to Index.html Page Elements

function AddEventListenerIndexPage() { 

    document.getElementById("instructions").addEventListener("click", function() {
        instructions()
    })

    document.getElementById("instructionsBox").addEventListener("click", function() {
        instructionsGone()
    })

    document.getElementById("saveUsername").addEventListener("click", function() {
        saveUsername()
    })
}

// adds event listener to on quiz-page.html

function AddEventListenerQuizPage() {

    document.getElementById("instructions").addEventListener("click", function() {
        instructions()
    })

    document.getElementById("instructionsBox").addEventListener("click", function() {
        instructionsGone()
    })

    document.getElementById("sound").addEventListener("click", function() {
        sound()
    })

    document.getElementById("smallHomeLinkClicked").addEventListener("click", function() {
        smallHomeLinkClicked()
    })
}

// focus on enter username box on opening index.html

function focus() {
        document.getElementById("username").focus();
    };

// Opens instruction box on being clicked

function instructions() {
    let instructionsBox = document.getElementById("instructionsBox");
    instructionsBox.setAttribute("style", "display: block");
    let instructions = document.getElementById("instructions");
    instructions.setAttribute("style", "display: none");
}

// Closes instruction box on being clicked

function instructionsGone() {
    let instructionsBox = document.getElementById("instructionsBox");
    instructionsBox.setAttribute("style", "display: none");
    let instructions = document.getElementById("instructions");
    instructions.setAttribute("style", "display: block");
}

// saves username and holds it on local storage if over two characters. Allows numbers but not excessive spaces. 

function saveUsername() {
    let username = document.getElementById("username").value;
    let usernameCheck = username.replace(/ /g, ''); // removes all spaces
    if (usernameCheck.length <= 2) {
        alert("Please enter a username over 2 characters");
    } else {
    localStorage.setItem('username', username);
    window.location.href = "quiz-page.html";    
    }
}

// Asks the user to confirm they want to navigate away from the page. 

function smallHomeLinkClicked() {
    let leavePage = confirm('Are you sure you want to go home?')
    if (leavePage) {
        window.location = 'index.html'
    }
}

// allow sound to be played or muted by clicking button

function sound() {
    let sound = document.getElementById("sound");
    if (sound.innerHTML === '<i class="fas fa-volume-mute"></i>') {
        sound.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        sound.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}

// begin game called when quiz-page.html is loaded

function beginGame() {
    let score = 0;
    let pointsToWin = 20;
    let points = document.getElementById("pointsToWin");
    let setScore = document.getElementById("score");
    setScore.innerText = score;
    points.innerText = pointsToWin;
    LoadQuestion();

    // Add event listener to images

    let imageSelect = document.getElementsByClassName("picture-item");
    for (let i = 0; i < imageSelect.length; i++) {
        imageSelect[i].addEventListener('click', flipCard);
    }    

    // Add event listener to quiz answers

    let choices = document.getElementsByClassName("quiz-button");
    for (let i = 0; i < choices.length; i++) {
        choices[i].addEventListener('click', checkAnswer);
    }
}

// function below is used in flipcard() to stop the user being able to click the same image section twice and still reducing points to win

function preventDoubleClick(event) {
    if (event.target.id === "pic1") {
        globalPreventClick1 += 1;
    }
    else if (event.target.id === "pic2") {
        globalPreventClick2 += 1;
    }
    else if (event.target.id === "pic3") {
        globalPreventClick3 += 1;
    }
    else if (event.target.id === "pic4") {
        globalPreventClick4 += 1;
    }
}

// Function used to check how many times the images have been clicked. If more than once points to win will be reduced. 

function clickCheck() {
    globalImageClicks += 1;
    if (globalImageClicks > 1) {
        reducePointsToWin();
    }
}

// reduces points to win with each image flipped. 

function reducePointsToWin() {
    let setPointsToWin = document.getElementById("pointsToWin");
    let pointsToWin = document.getElementById("pointsToWin").innerHTML;
    pointsToWin = Math.floor(pointsToWin/2);
    setPointsToWin.innerHTML = pointsToWin;
}

// flips the card. If more than one section has been revealed points to win is halved by calling clickCheck() which calls reducePointsToWin()

let flipCard = (event) => {
    preventDoubleClick(event);
    if (event.target.id === "pic1" && globalPreventClick1 === 1) {
        event.target.setAttribute('src', array[randomNumber].img1);
        clickCheck();
    } else if (event.target.id === "pic2" && globalPreventClick2 === 1) {
        event.target.setAttribute('src', array[randomNumber].img2);
        clickCheck();
    } else if (event.target.id === "pic3" && globalPreventClick3 === 1) {
        event.target.setAttribute('src', array[randomNumber].img3);
        clickCheck();
    } else if (event.target.id === "pic4" && globalPreventClick4 === 1) {
        event.target.setAttribute('src', array[randomNumber].img4);
        clickCheck();
    }
};

function checkAnswer(event) {
// check answer variables
    let selection = event.target;
    let answer = selection.innerText;
    let correctAnswer = array[randomNumber].answer;
// points system variables
    let points = document.getElementById("pointsToWin");
// progress bar variable
    let progressBar = document.getElementById("progressBar");
// sound playing variables
    let cheer = new Audio('assets/mp3/cheering.wav');
    let sad = new Audio('assets/mp3/sad.wav');
    let sound = document.getElementById("sound");

    globalQuestionClicks += 1;

    if (globalQuestionClicks === 1) {
    if (answer === correctAnswer) {
        selection.style.backgroundColor = "green";
        if (sound.innerHTML === '<i class="fas fa-volume-up"></i>') {
            cheer.play();
            }
        scoreUpdate();
        globalImageClicks = 0;
    } else {
        selection.style.backgroundColor = "red";
        if (sound.innerHTML === '<i class="fas fa-volume-up"></i>') {
            sad.play();
            }
        points.innerText = 20;
        globalImageClicks = 0;
        }
    setTimeout(function() {
        let score = parseInt(document.getElementById("score").innerText);
        selection.style.backgroundColor = "#0c1a25";
        array.splice(randomNumber,1);
        globalQuestionsAnswered += 1;
        progressBar.style.width = `${((globalQuestionsAnswered)/5)*100}%`;

        if (globalQuestionsAnswered === 5) {
            localStorage.setItem('score', score);
            window.location.href = "quiz-end.html";
        } else { 
            LoadQuestion();
        }
    }, 1000);
}
}

// updates the users score between questions and resets points to win as 20

function scoreUpdate() {
    let points = document.getElementById("pointsToWin");
    let pointsToWin = parseInt(points.innerText);
    let setScore = document.getElementById("score");
    let score = parseInt(document.getElementById("score").innerText);

    score = score + pointsToWin;
    setScore.innerHTML = score;
    points.innerText = 20;
}

// loads the next question once the user has answered the previous question

function LoadQuestion() {
    let picture1 = document.getElementById("pic1");
    let picture2 = document.getElementById("pic2");
    let picture3 = document.getElementById("pic3");
    let picture4 = document.getElementById("pic4");
    let q1 = document.getElementById("q1");
    let q2 = document.getElementById("q2");
    let q3 = document.getElementById("q3");
    let q4 = document.getElementById("q4");
    let multiple = array.length;
    globalThis.randomNumber = Math.floor(Math.random()*multiple); // Global Variable 'randomNumber'
        
    picture1.src = 'assets/images/click1.png';
    picture2.src = 'assets/images/click2.png';
    picture3.src = 'assets/images/click3.png';
    picture4.src = 'assets/images/click4.png';
    q1.innerHTML = array[randomNumber].choice1;
    q2.innerHTML = array[randomNumber].choice2;
    q3.innerHTML = array[randomNumber].choice3;
    q4.innerHTML = array[randomNumber].choice4;
    globalPreventClick1 = 0;
    globalPreventClick2 = 0;
    globalPreventClick3 = 0;
    globalPreventClick4 = 0;
    globalQuestionClicks = 0;
}

// sets quiz end page as the final score and gives the user their rating

function setScore() {
    let score = localStorage.getItem('score');
    document.getElementById("finalScore").innerText = score;
    
    let username = localStorage.getItem('username');
    document.getElementById("name").innerHTML = `${username}, your final score is:`;
    
    if (score >= 80) {
        document.getElementById("rank").innerText = "Wow, you really know your celebs";
    } else if (score < 79 && score >= 30) {
        document.getElementById("rank").innerText = "Not bad. You recognised someone...";
    } else {
        document.getElementById("rank").innerText = "It's ok, celebs are not your thing";
    }
    highScores();
}

// sets the users score on the highscores page, stores it in an array on local storage and orders it largest to smallest. 

function highScores() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    let score = localStorage.getItem('score');
    highScores.push(JSON.parse(score));
    localStorage.removeItem('score');
    //sort the array
    highScores = highScores.map(Number);
    highScores.sort(function(a, b){return a - b}).reverse();
    //ensure array is not greater than 5. 
    if (highScores.length > 5) {
        highScores.splice(5);
    }
    //store array on local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

// creates innerHTML of leaderboard from highScores array

function createHighScores() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    if (highScores.length >= 1) {
        let li = '<ol>';
        highScores.forEach(function(listMaker) {
            li += '<li>'+listMaker+'</li>';
        });

        li += '</ol>';

        document.getElementById("highscores-list").innerHTML = li;
    }
}

// prevents the "play again" button from showing if the game hasn't yet been played

function playAgain() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    if (highScores.length < 1) {
        console.log(highScores.length)
        document.getElementById("playAgain").setAttribute("style", "display: none");
    } else {
        document.getElementById("playAgain").setAttribute("style", "display: block");
    }
}

// if the page is index.html then loads functions and adds event listeners

if (document.body.classList.contains('index')) {
    focus();
    AddEventListenerIndexPage();
} else if (document.body.classList.contains('quizPage')) {
    beginGame();
    AddEventListenerQuizPage();
} else if (document.body.classList.contains('quizEnd')) {
    setScore();
} else if (document.body.classList.contains('highscores')) {
    playAgain();
    createHighScores()
} else {
    //do nothing
};