let marker = "X";
let board = [];
const mark = document.querySelectorAll(".cell");

mark.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.textContent === "") {
      element.textContent = marker;
      if (marker === "X") {
        marker = "O";
      } else {
        marker = "X";
      }
    }
    updateScore()
    isWon();
  });
});


const gameBoard = {
  board: board = ["", "", "", "", "", "", "", "", ""]
}

const players = {
  player1: "Aidan",
  player2: "Joe"
}

function updateScore(){
  counter = 0;
  mark.forEach((element) => {
    board[counter] = element.textContent;
    counter++;
  })
console.log(board);
}


const h = document.querySelector("h1")

h.addEventListener("click", () => {
  mark.forEach((element) => {
      element.textContent = ""
  });
  board = ["", "", "", "", "", "", "", "", ""]
  marker = "X"
  console.log(board)
})
 // eight possible ways to win tic tac toe. starting with the top row, we will seek winning matches. 
function isWon() {
  if (board[0] === board[1] && board[0] === board[2]) {
    if (board[0] != "") {
    console.log("win");
    }
  }
}




