const squares = document.querySelectorAll(".square")

const showTheMole = () => {
  let randomNumber = Math.floor(Math.random() * 9)
  const randomSquare = squares[randomNumber].classList.add("mole")
}
setInterval(showTheMole, 2000)
