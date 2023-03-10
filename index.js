
let homeEL = document.getElementById("home-el")
let awayEL = document.getElementById("away-el")
let hScore = 0

function home2() {  
    hScore = hScore + 2
    homeEL.textContent = "Home: " + hScore
}

function home3() {  
    hScore = hScore + 3
    homeEL.textContent = "Home: " + hScore
}

function homeDown() {
    if(hScore >= 1)  
    hScore = hScore - 1
    homeEL.textContent = "Home: " + hScore
}

function homeClear() {  
    hScore = 0
    homeEL.textContent = "Home: " + hScore
}

function away2() {  
    hScore = hScore + 2
    awayEL.textContent = "Away: " + hScore 
}

function away3() {  
    hScore = hScore + 3
    awayEL.textContent = "Away: " + hScore
}

function awayDown() {  
    if(hScore >= 1) 
    hScore = hScore - 1
    awayEL.textContent = "Away: " + hScore
}

function awayClear() {  
    hScore = 0
    awayEL.textContent = "Away: " + hScore
}
