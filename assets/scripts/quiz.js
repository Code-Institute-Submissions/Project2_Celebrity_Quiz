// focus on enter username box on opening index.html

function focus() {
    document.getElementById("username").focus();
  }

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

// save username

function saveUsername() {
    let username = document.getElementById("username").value;
    usernameCheck = username.replace(/ /g, ''); // removes all spaces
    if (usernameCheck.length <= 2) {
        alert("Please enter a username over 2 characters");
    } else {
    localStorage.setItem('username', username);
    window.location.href = "quiz-page.html";    
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

// create array

const array = [
    {
    name : 'chris',
    img1 : 'assets/images/chris1.png',
    img2 : 'assets/images/chris2.png',
    img3 : 'assets/images/chris3.png',
    img4 : 'assets/images/chris4.png',
    choice1 : '1. David Beckham',
    choice2 : '2. Jared Leto',
    choice3 : '3. Christian Bale',
    choice4 : '4. Hugh Jackman',
    answer : '3. Christian Bale',
    },
    {
    name : 'dan',
    img1 : 'assets/images/dan1.png',
    img2 : 'assets/images/dan2.png',
    img3 : 'assets/images/dan3.png',
    img4 : 'assets/images/dan4.png',
    choice1 : '1. Dany Trejo',
    choice2 : '2. Cheech Marin',
    choice3 : '3. Tom Savini',
    choice4 : '4. John P. Fedele',
    answer : '1. Dany Trejo',
    },
    {
    name : 'eli',
    img1 : 'assets/images/eli1.png',
    img2 : 'assets/images/eli2.png',
    img3 : 'assets/images/eli3.png',
    img4 : 'assets/images/eli4.png',
    choice1 : '1. Robbie Coltrane',
    choice2 : '2. Daniel Radcliffe',
    choice3 : '3. Elija Wood',
    choice4 : '4. Oliver Phelps',
    answer : '3. Elija Wood',
    },
    {
    name : 'lea',
    img1 : 'assets/images/lea1.png',
    img2 : 'assets/images/lea2.png',
    img3 : 'assets/images/lea3.png',
    img4 : 'assets/images/lea4.png',
    choice1 : '1. Rachel Weisz',
    choice2 : '2. Lea Seydoux',
    choice3 : '3. Ariana Labed',
    choice4 : '4. Saoirse Ronan',
    answer : '2. Lea Seydoux',
    },
    {
    name : 'mah',
    img1 : 'assets/images/mah1.png',
    img2 : 'assets/images/mah2.png',
    img3 : 'assets/images/mah3.png',
    img4 : 'assets/images/mah4.png',
    choice1 : '1. Wesley Snipes',
    choice2 : '2. Anthony Mackie',
    choice3 : '3. Don Cheadle',
    choice4 : '4. Mahershala Ali.',
    answer : '4. Mahershala Ali.',
    },
    {
    name : 'nic',
    img1 : 'assets/images/nic1.png',
    img2 : 'assets/images/nic2.png',
    img3 : 'assets/images/nic3.png',
    img4 : 'assets/images/nic4.png',
    choice1 : '1. David Beckham',
    choice2 : '2. Thomas Jane',
    choice3 : '3. John Travolta',
    choice4 : '4. Nicholas Cage',
    answer : '4. Nicholas Cage',
    },
    {
    name : 'ser',
    img1 : 'assets/images/ser1.png',
    img2 : 'assets/images/ser2.png',
    img3 : 'assets/images/ser3.png',
    img4 : 'assets/images/ser4.png',
    choice1 : '1. Serena Williams',
    choice2 : '2. Isha Price',
    choice3 : '3. Venus Williams',
    choice4 : '4. Lyndrea Price',
    answer : '1. Serena Williams',
    },
    {
    name : 'nat',
    img1 : 'assets/images/nat1.png',
    img2 : 'assets/images/nat2.png',
    img3 : 'assets/images/nat3.png',
    img4 : 'assets/images/nat4.png',
    choice1 : '1. Michelle Rodriguez',
    choice2 : '2. Nathalie Emmanuel',
    choice3 : '3. Jordana Brewster',
    choice4 : '4. Lyndrea Price',
    answer : '2. Nathalie Emmanuel',
    },
    {
    name : 'brad',
    img1 : 'assets/images/brad1.png',
    img2 : 'assets/images/brad2.png',
    img3 : 'assets/images/brad3.png',
    img4 : 'assets/images/brad4.png',
    choice1 : '1. Brad Pitt',
    choice2 : '2. Leonardo Dicaprio',
    choice3 : '3. Willem Dafoe',
    choice4 : '4. Matthew Perry',
    answer : '1. Brad Pitt',
    },
    {
    name : 'fran',
    img1 : 'assets/images/fran1.png',
    img2 : 'assets/images/fran2.png',
    img3 : 'assets/images/fran3.png',
    img4 : 'assets/images/fran4.png',
    choice1 : '1. Brendan Gleeson',
    choice2 : '2. Billy Connolly',
    choice3 : '3. Frankie Boyle',
    choice4 : '4. Sean Bean',
    answer : '3. Frankie Boyle',
    },
    {
    name : 'jo',
    img1 : 'assets/images/jo1.png',
    img2 : 'assets/images/jo2.png',
    img3 : 'assets/images/jo3.png',
    img4 : 'assets/images/jo4.png',
    choice1 : '1. Ann Widdecombe',
    choice2 : '2. Eliza Bourke',
    choice3 : '3. Sara Millican',
    choice4 : '4. Jo Brand',
    answer : '4. Jo Brand',
    },
    {
    name : 'wes',
    img1 : 'assets/images/wes1.png',
    img2 : 'assets/images/wes2.png',
    img3 : 'assets/images/wes3.png',
    img4 : 'assets/images/wes4.png',
    choice1 : '1. Wesley Snipes',
    choice2 : '2. Grand L. Bush',
    choice3 : '3. Danny Glover',
    choice4 : '4. Damon Hines',
    answer : '1. Wesley Snipes',
    },
    {
    name : 'bey',
    img1 : 'assets/images/bey1.jpg',
    img2 : 'assets/images/bey2.jpg',
    img3 : 'assets/images/bey3.jpg',
    img4 : 'assets/images/bey4.jpg',
    choice1 : '1. Nina Taylor',
    choice2 : '2. Michelle Williams',
    choice3 : '3. Kelly Rowland',
    choice4 : '4. Beyonce Knowles',
    answer : '4. Beyonce Knowles',
    },
    {
    name : 'chris',
    img1 : 'assets/images/chr1.jpg',
    img2 : 'assets/images/chr2.jpg',
    img3 : 'assets/images/chr3.jpg',
    img4 : 'assets/images/chr4.jpg',
    choice1 : '1. Chris Rock',
    choice2 : '2. Eddie Murphy',
    choice3 : '3. Richard Pryor',
    choice4 : '4. Dave Chappelle',
    answer : '1. Chris Rock',
    },
    {
    name : 'court',
    img1 : 'assets/images/cour1.png',
    img2 : 'assets/images/cour2.png',
    img3 : 'assets/images/cour3.png',
    img4 : 'assets/images/cour4.png',
    choice1 : '1. Monica Geller',
    choice2 : '2. Rachel Green',
    choice3 : '3. Courtney Cox',
    choice4 : '4. Jennifer Aniston',
    answer : '3. Courtney Cox',
    },
    {
    name : 'davs',
    img1 : 'assets/images/davs1.png',
    img2 : 'assets/images/davs2.png',
    img3 : 'assets/images/davs3.png',
    img4 : 'assets/images/davs4.png',
    choice1 : '1. David Schwimmer',
    choice2 : '2. Ross Geller',
    choice3 : '3. Chandler Bing',
    choice4 : '4. Matthew Perry',
    answer : '1. David Schwimmer',
    },
    {
    name : 'dona',
    img1 : 'assets/images/dona1.png',
    img2 : 'assets/images/dona2.png',
    img3 : 'assets/images/dona3.png',
    img4 : 'assets/images/dona4.png',
    choice1 : '1. Theodore Sutherland',
    choice2 : '2. Donald Sutherland',
    choice3 : '3. Donald Trump',
    choice4 : '4. Frederick McLea',
    answer : '2. Donald Sutherland',
    },
    {
    name : 'ed',
    img1 : 'assets/images/ed1.png',
    img2 : 'assets/images/ed2.png',
    img3 : 'assets/images/ed3.png',
    img4 : 'assets/images/ed4.png',
    choice1 : '1. Chris Rock',
    choice2 : '2. Eddie Murphy',
    choice3 : '3. Richard Pryor',
    choice4 : '4. Dave Chappelle',
    answer : '2. Eddie Murphy',
    },
    {
    name : 'hal',
    img1 : 'assets/images/hal1.png',
    img2 : 'assets/images/hal2.png',
    img3 : 'assets/images/hal3.png',
    img4 : 'assets/images/hal4.png',
    choice1 : '1. Halle Berry',
    choice2 : '2. Carol Sutton',
    choice3 : '3. Frances Fisher',
    choice4 : '4. Holiday Hopke',
    answer : '1. Halle Berry',
    },
    {
    name : 'jaq',
    img1 : 'assets/images/jaq1.png',
    img2 : 'assets/images/jaq2.png',
    img3 : 'assets/images/jaq3.png',
    img4 : 'assets/images/jaq4.png',
    choice1 : '1. Jack Nicholson',
    choice2 : '2. Joaquin Phoenix',
    choice3 : '3. Heath Ledger',
    choice4 : '4. Jared Lito',
    answer : '2. Joaquin Phoenix',
    },
    {
    name : 'jay',
    img1 : 'assets/images/jay1.png',
    img2 : 'assets/images/jay2.png',
    img3 : 'assets/images/jay3.png',
    img4 : 'assets/images/jay4.png',
    choice1 : '1. Jay Z',
    choice2 : '2. Mos Def',
    choice3 : '3. Guru',
    choice4 : '4. DJ Premier',
    answer : '1. Jay Z',
    },
    {
    name : 'mat',
    img1 : 'assets/images/mat1.png',
    img2 : 'assets/images/mat2.png',
    img3 : 'assets/images/mat3.png',
    img4 : 'assets/images/mat4.png',
    choice1 : '1. David Schwimmer',
    choice2 : '2. Ross Geller',
    choice3 : '3. Chandler Bing',
    choice4 : '4. Matthew Perry',
    answer : '4. Matthew Perry',
    },
    {
    name : 'mich',
    img1 : 'assets/images/mich1.png',
    img2 : 'assets/images/mich2.png',
    img3 : 'assets/images/mich3.png',
    img4 : 'assets/images/mich4.png',
    choice1 : '1. Sasha Obama',
    choice2 : '2. Malia Ann Obama',
    choice3 : '3. Michelle Obama',
    choice4 : '4. Marian Shields',
    answer : '3. Michelle Obama',
    },
    {
    name : 'orl',
    img1 : 'assets/images/orl1.png',
    img2 : 'assets/images/orl2.png',
    img3 : 'assets/images/orl3.png',
    img4 : 'assets/images/orl4.png',
    choice1 : '1. Orlando Bloom',
    choice2 : '2. Ian McShane',
    choice3 : '3. Stephen Graham',
    choice4 : '4. Sam Claflin',
    answer : '1. Orlando Bloom',
    },
    {
    name : 'vig',
    img1 : 'assets/images/vig1.png',
    img2 : 'assets/images/vig2.png',
    img3 : 'assets/images/vig3.png',
    img4 : 'assets/images/vig4.png',
    choice1 : '1. Andy Serkis',
    choice2 : '2. Viggo Mortensen',
    choice3 : '3. Hugo Weaving',
    choice4 : '4. Sean Bean',
    answer : '2. Viggo Mortensen',
    },
    {
    name : 'will',
    img1 : 'assets/images/will1.png',
    img2 : 'assets/images/will2.png',
    img3 : 'assets/images/will3.png',
    img4 : 'assets/images/will4.png',
    choice1 : '1. James Avery',
    choice2 : '2. DJ Jazzy Jeff',
    choice3 : '3. Alfonso Ribeiro',
    choice4 : '4. Will Smith',
    answer : '4. Will Smith',
    },
    ];

// global variables

let questions = 0;
let clicks = 0;

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

let p1 = 0; //global variables
let p2 = 0; //global variables
let p3 = 0; //global variables
let p4 = 0; //global variables

// function below is used in flipcard() to stop the user being able to click the same image section twice and still reducing points to win

function preventDoubleClick(event) {
    if (event.target.id === "pic1") {
        p1 += 1;
    }
    else if (event.target.id === "pic2") {
        p2 += 1;
    }
    else if (event.target.id === "pic3") {
        p3 += 1;
    }
    else if (event.target.id === "pic4") {
        p4 += 1;
    }
}

// Function used to check how many times the images have been clicked. If more than once points to win will be reduced. 

function clickCheck() {
    clicks += 1;
    if (clicks > 1) {
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
    if (event.target.id === "pic1" && p1 === 1) {
        event.target.setAttribute('src', array[randomNumber].img1);
        clickCheck();
    } else if (event.target.id === "pic2" && p2 === 1) {
        event.target.setAttribute('src', array[randomNumber].img2);
        clickCheck();
    } else if (event.target.id === "pic3" && p3 === 1) {
        event.target.setAttribute('src', array[randomNumber].img3);
        clickCheck();
    } else if (event.target.id === "pic4" && p4 === 1) {
        event.target.setAttribute('src', array[randomNumber].img4);
        clickCheck();
    }
};

let qclicks = 0 // global variable

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

    qclicks += 1

    if (qclicks === 1) {
    if (answer === correctAnswer) {
        selection.style.backgroundColor = "green";
        if (sound.innerHTML === '<i class="fas fa-volume-up"></i>') {
            cheer.play();
            }
        scoreUpdate();
        clicks = 0;
    } else {
        selection.style.backgroundColor = "red";
        if (sound.innerHTML === '<i class="fas fa-volume-up"></i>') {
            sad.play();
            }
        points.innerText = 20;
        clicks = 0;
        }
    setTimeout(function() {
        let score = parseInt(document.getElementById("score").innerText);
        selection.style.backgroundColor = "#0c1a25";
        array.splice(randomNumber,1);
        questions += 1;
        progressBar.style.width = `${((questions)/5)*100}%`;

        if (questions === 5) {
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
    p1 = 0;
    p2 = 0;
    p3 = 0;
    p4 = 0;
    qclicks = 0;
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
    document.getElementById("hide").setAttribute("style", "display: none");
}

// prevents the "play again" button from showing if the game hasn't yet been played

function playAgain() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    if (highScores.length < 1) {
        document.getElementById("playAgain").setAttribute("style", "display: none");
    } else {
        document.getElementById("hide").setAttribute("style", "display: block");
    }
}
