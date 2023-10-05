var ans, val, guesses;  
 
function reset() { 
    ans = (int)(Math.random * 100 + 1);
    val = 50; 
    guesses = 5; 
}

function changeVal(i) { 
    val += i; 
}

function commit() { 
    if(val == ans) return true; 
    return false; 
}