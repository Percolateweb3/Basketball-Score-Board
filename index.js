
const homeEL = document.querySelector("#home-score")
const awayEL = document.querySelector("#away-score")
let homeS = 0
let awayS = 0

function score(team, num) {

    if (team === "home") {
        if (num === 0) {
            homeS = 0
      } if (num > 0) {
        homeS += num
      } if (num < 0 && homeS > 0) {
            homeS += -1
      }   
        homeEL.textContent = "Home: " + homeS
        
    } else if (team === "away") {
        if (num === 0) {
            awayS = 0
      } if (num > 0) {
        awayS += num
      } if (num === -1 && awayS > 0) {
            awayS += -1
      }   
        awayEL.textContent = "Away: " + awayS
    }
}



