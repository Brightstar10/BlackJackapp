let submitEl = document.getElementById('submit-el').textContent
console.log(submitEl)

let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

function startgame() {
  if (sum <= 20) {
    message = "Do You want a new card? 🤔"
  } else if (sum === 20){
  message = "Wahoo, You've got a BlackJack! 🥰"
  hasBlackJack = true 
  } else {
    message = "You're out of the game! 😳"
    isAlive = true
  }
  
  console.log(message)
}