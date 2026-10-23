let homeStoreEl = document.getElementById("home-score")
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScore = 0

function addOneHome(){
  homeScore += 1
  homeStoreEl.textContent = homeScore
}

function addTwoHome(){
  homeScore += 2
  homeStoreEl.textContent = homeScore
}

function addThreeHome(){
  homeScore += 3
  homeStoreEl.textContent = homeScore
}

let guestStoreEl = document.getElementById("guest-score")
let guestScore = 0

function addOneGuest(){
  guestScore += 1
  guestStoreEl.textContent = guestScore
}

function addTwoGuest(){
  guestScore += 2
  guestStoreEl.textContent = guestScore
}
 
function addThreeGuest(){
  guestScore += 3
  guestStoreEl.textContent = guestScore
}

function minusOneHome(){
  homeScore -= 1
  homeStoreEl.textContent = homeScore
}

function minusTwoHome(){
  homeScore -= 2
  homeStoreEl.textContent = homeScore
}

function minusThreeHome(){
  homeScore -= 3
  homeStoreEl.textContent = homeScore
}

function minusOneGuest(){
  guestScore -= 1
  guestStoreEl.textContent = guestScore
}

function minusTwoGuest(){
  guestScore -= 2
  guestStoreEl.textContent = guestScore
} 

function minusThreeGuest(){
  guestScore -= 3
  guestStoreEl.textContent = guestScore
}

let startAgainEl = document.getElementById("home-start-over")

function startOverAgain(){
  homeScore = 0
  guestScore = 0
  homeStoreEl.textContent = homeScore
  guestStoreEl.textContent = guestScore
}



