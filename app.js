let marker = "X";
let board = [];
const mark = document.querySelectorAll(".cell");

const gameBoard = {
  board: (board = ["", "", "", "", "", "", "", "", ""]),
};

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
    updateScore();
    isWon();
  });
});

const players = {
  player1: "Aidan",
  player2: "Joe",
};

function updateScore() {
  counter = 0;
  mark.forEach((element) => {
    board[counter] = element.textContent;
    counter++;
  });
}

const h = document.querySelector(".h1");

h.addEventListener("click", () => {
  mark.forEach((element) => {
    element.textContent = "";
  });
  board = ["", "", "", "", "", "", "", "", ""];
  marker = "X";
});

// eight possible ways to win tic tac toe. starting with the top row, we will seek winning matches.
function isWon() {
  if (board[0] === board[1] && board[0] === board[2]) {
    if (board[0] != "") {
      console.log("win");
    }
  }
  if (board[3] === board[4] && board[3] === board[5]) {
    if (board[3] != "") {
      console.log("win");
    }
  }
  if (board[6] === board[7] && board[6] === board[8]) {
    if (board[6] != "") {
      console.log("win");
    }
  }
  if (board[0] === board[3] && board[0] === board[6]) {
    if (board[0] != "") {
      console.log("win");
    }
  }
  if (board[1] === board[4] && board[1] === board[7]) {
    if (board[1] != "") {
      console.log("winer");
    }
  }
  if (board[2] === board[5] && board[2] === board[8]) {
    if (board[2] != "") {
      console.log("win");
    }
  }
  if (board[0] === board[4] && board[0] === board[8]) {
    if (board[0] != "") {
      console.log("win");
    }
  }
  if (board[2] === board[4] && board[2] === board[6]) {
    if (board[2] != "") {
      console.log("win");
    }
  }
}
