let marker = "X";
let board = [];
let mark = document.querySelectorAll(".cell");

const h = document.querySelector(".h1");
h.addEventListener("click", reset);


const gameBoard = {
  board: (board = ["", "", "", "", "", "", "", "", ""]),
};

const players = {
  X: 0,
  O: 1
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
    isTie();
  });
});

function updateScore() {
  counter = 0;
  mark.forEach((element) => {
    board[counter] = element.textContent;
    counter++;
  });
}

// eight possible ways to win tic tac toe. starting with the top row, we will seek winning matches.
function isWon() {
  if (board[0] === board[1] && board[0] === board[2]) {
    if (board[0] != "") {
      alertWinner(`${board[0]} is the winner`);
      setTimeout(reset, 2000);
    }
  }
  if (board[3] === board[4] && board[3] === board[5]) {
    if (board[3] != "") {
      alertWinner(`${board[3]} is the winner`);
      setTimeout(reset, 2000);
    }
  }
  if (board[6] === board[7] && board[6] === board[8]) {
    if (board[6] != "") {
      alertWinner(`${board[6]} is the winner`);
      setTimeout(reset, 2000);
    }
  }
  if (board[0] === board[3] && board[0] === board[6]) {
    if (board[0] != "") {
      alertWinner(`${board[0]} is the winner`);
      setTimeout(reset, 2000);
    }
  }
  if (board[1] === board[4] && board[1] === board[7]) {
    if (board[1] != "") {
      alertWinner(`${board[1]} is the winner`);
      setTimeout(reset, 2000);
    }
  }
  if (board[2] === board[5] && board[2] === board[8]) {
    if (board[2] != "") {
      alertWinner(`${board[2]} is the winner`);
      setTimeout(reset, 2000);
    }
  }
  if (board[0] === board[4] && board[0] === board[8]) {
    if (board[0] != "") {
      alertWinner(`${board[0]} is the winner`);
      setTimeout(reset, 2000);
    }
  }
  if (board[2] === board[4] && board[2] === board[6]) {
    if (board[2] != "") {
      alertWinner(`${board[2]} is the winner`);
      setTimeout(reset, 2000);
    }
  }
}

function isTie() {
  if (!board.includes("")) {
    if(!isWon) {
      console.log("")
    } else {
      const alert = document.querySelector(".container")
      const message = document.createElement("h3");
      message.innerText = "TIE";
      alert.appendChild(message);
    
      setTimeout(() => {
        message.textContent = "";
      }, 2000)
      setTimeout(reset, 2000);
    }
  }
}

function reset() {
  mark.forEach((element) => {
    element.textContent = "";
  });
  board = ["", "", "", "", "", "", "", "", ""];
  marker = "X";
}

function alertWinner(string) {
  const alert = document.querySelector(".container")
  const message = document.createElement("h3");
  message.innerText = string;
  alert.appendChild(message);

  setTimeout(() => {
    message.textContent = "";
  }, 2000)
}
