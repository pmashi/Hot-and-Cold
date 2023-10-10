var val;
var guesses; 
sessionStorage.setItem('p', false); 
var playing = false; 
function play() { 
    sessionStorage.setItem('p', true); 
    playing = true; 
    reset(); 
}
function reset() { 
    if(sessionStorage.getItem('p')) {
        playing = true; 
    }
    ans = parseInt(Math.random() * 100 + 1);
    ans = ans.toString(32);
    sessionStorage.setItem("g", ans)
    
    val = 50; 
    guesses = 5; 
    
    hintText.innerHTML = "";
    display(); 
}

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
const hintMsg = ["You Won!", "Very Hot", "Hot", "Very Warm", "Warm", "Cool", "Very Cool", "Cold", "Very Cold"];
// Within 5 - Very Hot (1)
// Within 6 to 8 - Hot (2)
// Within 9 to 15 - Very Warm (3) 
// Within 16 to 20 - Warm (4)
// Within 21 to 30 - Cool (5)
// Within 31 to 40 - Very Cool (6)
// Within 41 to 55 - Cold (7)
// More than 55 - Very Cold (8)
function getHintId() { 
    const diff = Math.abs(val - parseInt(sessionStorage.getItem('g'), 32));
    console.log(diff);
    //Win condition
    if(diff == 0) return 0; 
    // Randomize Grief 5% 
    // parseInt(Math.random() * 1000 + 1) returns values [1, 1000]
    // if that value divides 20, then the hint will be griefed. 
    if(parseInt(Math.random() * 1000 + 1)%20 == 0) return 1;
    // Regular hints 
    if(diff < 5) return 1;
    if(diff < 9) return 2;
    if(diff < 16) return 3;
    if(diff < 21) return 4;
    if(diff < 31) return 5;
    if(diff < 41) return 6;
    if(diff < 56) return 7;
    return 8;
}
function displayHint() { 
    id = getHintId(); 
    if(id == 0) { 
        hintText.innerHTML = hintMsg[id];
        playing = false; 
    } else {
        hintText.innerHTML = "You are " + hintMsg[id]; 
    }
}

// Start or Reset the game
playButton = document.getElementById("playButton");
resetButton = document.getElementById("resetButton")
commitButton = document.getElementById('commitButton');

guessText = document.getElementById("guess"); 
guessesText = document.getElementById("guesses"); 
hintText = document.getElementById("hint"); 

// playButton.addEventListener("click", reset); 
resetButton.addEventListener("click", reset);

//Functions affect the guess value. 
const buttons = document.querySelectorAll(".numedit");

buttons.forEach(button => { 
    button.addEventListener('click', changeVal)
});

function changeVal(event) { 
    if(!playing) return; 
    const i = parseInt(event.target.dataset.param); 
    val += i; 
    if(val < 1) val = 1; 
    if(val > 100) val = 100; 
    displayGuess();
}


commitButton.addEventListener('click', commit); 

function commit() {
    if(playing) {
        displayHint();
    }
}

