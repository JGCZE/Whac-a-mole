const squares = document.querySelectorAll(".square")
const time = document.getElementById("time")

const runGame = () => {
  let randomNumber = Math.floor(Math.random() * 9)
  const randomSquare = squares[randomNumber].classList.add("mole")
  setTimeout(() => {
    squares[randomNumber].classList.remove("mole")
  }, 800)
}
setInterval(runGame, 2000)

squares.forEach((square) => {
  square.addEventListener("click", (e) => {
    let clickOnMole = e.target.classList.contains("mole")
    if (clickOnMole) {
      let score = document.getElementById("score").innerHTML
      score++
      document.getElementById("score").innerHTML = score
    }
  })
})

const countDown = () => {
  let currentTime = time.textContent
  currentTime--
  time.textContent = currentTime
  if (currentTime === 0) {
    clearInterval(timerId)
    alert("Game over! Your final score is " + document.getElementById("score").innerHTML)
  }
}
let timerId = setInterval(countDown, 1000)
