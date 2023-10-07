var ans = 0;
var val = -1 
var guesses = 0;  

// Start or Reset the game
playButton = document.getElementById("playButton");

guessText = document.getElementById("guess");
guessesText = document.getElementById("guesses");

resetButton = document.getElementById("resetButton")

function display() { 
    displayGuess();
    displayGuesses(); 
}

function displayGuess() { 
    guessText.innerHTML = "Guess: " + val; 
}

function displayGuesses() { 
    guessesText.innerHTML = "Guesses: " + guesses;
}

function reset() { 
    ans = parseInt(Math.random() * 100 + 1);
    val = 50; 
    guesses = 5; 

    display(); 
}

playButton.addEventListener("click", reset); 
resetButton.addEventListener("click", reset);

//Functions affect the guess value. 
const buttons = document.querySelectorAll(".numedit");

buttons.forEach(button => { 
    button.addEventListener('click', changeVal)
});


function changeVal(event) { 
    const i = parseInt(event.target.dataset.param); 
    if(val >= 0) {
        if(val + i >= 0 && val + i <= 100) val += i;
        else if(val + i < 0) val = 0;
        else val = 100;
    }
    displayGuess();
}


function commit() { 
    guesses--;
    if(val == ans) return true; 
    return false; 
}

