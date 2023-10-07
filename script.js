var ans = 0, val = 0, guesses = 0;  

// Start or Reset the game
const playButton = document.getElementById("playButton");

const guessText = document.getElementById("guess");
const guessesText = document.getElementById("guesses");

const resetButton = document.getElementById("resetButton")

function reset() { 
    ans = (int)(Math.random * 100 + 1);
    val = 50; 
    guesses = 5; 

    display(); 
}

// playButton.addEventListener("click", reset); 
// resetButton.addEventListener("click", reset);

//Functions affect the guess value. 
const buttons = document.querySelectorAll("numedit");

buttons.forEach(button => { 
    button.addEventListener('click', changeVal)
});


function changeVal(event) { 
    const i = event.target.dataset.param; 
    val += i; 
    displayGuess();
}

function display() { 
    displayGuess();
    displayGuesses(); 
}

function displayGuess() { 
    guessText.innerHTML = "Guess: " + val; 
}

function displayGuesses() { 
    
}

function commit() { 
    if(val == ans) return true; 
    return false; 
}

