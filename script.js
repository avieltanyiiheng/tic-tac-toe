// You’re going to store the gameboard as an array inside of a Gameboard object,
// so start there! Your players are also going to be stored in objects,
// and you’re probably going to want an object to control the flow of the game itself.

const playButton = document.querySelector(".play-btn");

const gameFlow = (() => {
  let playTurn = 1;
  let gameOver = false;
  let marker = playTurn === 1 ? "O" : "X";
  const text = document.querySelector(".player");
  const playerOneName = document.querySelector(".playerone");
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const gamePlay = () => {
    if (gameFlow.playTurn === 1 && gameOver === false) {
      text.textContent = `It is Player One's (O) turn`;
    } else {
      text.textContent = `player 2 turn`;
    }
    const pieces = document.querySelectorAll(".piece");

    const addClicks = pieces.forEach((piece) => {
      piece.addEventListener("click", () => {
        if (piece.textContent === "") {
          if (gameFlow.playTurn === 1 && gameFlow.gameOver === false) {
            piece.textContent = "O";
            gameFlow.playTurn = 2;
            gameFlow.checkwin();
          } else if (gameFlow.playTurn === 2 && gameFlow.gameOver === false) {
            piece.textContent = "X";
            gameFlow.playTurn = 1;
            gameFlow.checkwin();
          }
        } else alert(`Invalid move! slot is already taken.`);

        // append to gameboard
        const playedIndex = piece.className.slice(-1);
        const markerPlayed = piece.textContent;
        console.log(markerPlayed);
        gameBoard.board[playedIndex] = markerPlayed;
      });
    });
    // check win
  };
  const checkwin = () => {
    winningCombinations.forEach((combination) => {
      if (
        gameBoard.board[combination[0]] === gameBoard.board[combination[1]] &&
        gameBoard.board[combination[1]] === gameBoard.board[combination[2]] &&
        gameBoard.board[combination[0]] != "" &&
        gameBoard.board[combination[1]] != "" &&
        gameBoard.board[combination[2]] != ""
      ) {
        gamePlay.gameOver = true;
        alert("win");
      }
    });
  };
  return { gamePlay, marker, playTurn, gameOver, checkwin };
})();

const gameBoard = (() => {
  //   define te board
  let board = ["", "", "", "", "", "", "", "", ""];
  // Render the game on HTML
  const render = () => {
    const game = document.querySelector(".game");

    for (let i = 0; i < board.length; i++) {
      const renderPiece = document.createElement("div");
      renderPiece.classList.add(`piece`);
      renderPiece.classList.add(`${i}`);
      renderPiece.textContent = board[i];
      renderPiece.appendChild;
      game.appendChild(renderPiece);
    }

    // Make the game clickable
  };

  return { board, render };
})();

playButton.addEventListener("click", () => {
  gameBoard.render();
  gameFlow.gamePlay();
}); // TODO: Fill with X or O function

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWin = (currentClass) => {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return gameBoard.board[index].classList;
    });
  });
};
