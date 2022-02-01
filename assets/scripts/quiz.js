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

// flips the card. If more than one section has been revealed points to win is halved by calling clickCheck() which calls reducePointsToWin()

let flipCard = (event) => {
    preventDoubleClick(event);
    if (event.target.id === "pic1") {
        event.target.setAttribute('src', array[randomNumber].img1);
    } else if (event.target.id === "pic2") {
        event.target.setAttribute('src', array[randomNumber].img2);
    } else if (event.target.id === "pic3") {
        event.target.setAttribute('src', array[randomNumber].img3);
    } else if (event.target.id === "pic4") {
        event.target.setAttribute('src', array[randomNumber].img4);
    }
};