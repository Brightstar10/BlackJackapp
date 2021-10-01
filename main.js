let submitEl = document.getElementById('submit-el').textContent
console.log(submitEl)

let sumEl = document.querySelector("#sum-el")
let countEl = document.querySelector("#count-el")


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
  sumEl.textContent = "Sum: " + sum
  countEl.textContent = "Counts: " + firstCard + " " + secondCard
  
  console.log(message)
}

function newCard() {
  console.log("Drawing a new card from the deck!")
  let card = 6
  sum += card

}

startgame();