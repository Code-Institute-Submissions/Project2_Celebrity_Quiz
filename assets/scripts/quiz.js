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