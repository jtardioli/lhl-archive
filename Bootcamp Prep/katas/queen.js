const generateBoard = (queen1, queen2) => {
  let board = [];
  for (let k = 0; k < 8; k++) {
    let row = [];
    for (let i = 0; i < 8; i++) {
      let queenCheck = [k, i];
      let queen1Check =
        queenCheck[0] === queen1[0] && queenCheck[1] === queen1[1];
      let queen2Check =
        queenCheck[0] === queen2[0] && queenCheck[1] === queen2[1];

      if (queen1Check || queen2Check) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    board.push(row);
  }

  return board;
};

const queenThreat = (board) => {
  //find queen
  let queen2 = null;
  board.forEach((row, rowIndex) => {
    row.forEach((square, squareIndex) => {
      if (square === 1) {
        queen2 = [rowIndex, squareIndex];
      }
    });
  });

  //vertical
  for (let i = 0; i < board.length; i++) {
    let queenCounter = 0;
    for (column of board) {
      if (column[i] === 1) {
        queenCounter++;
      }
    }
    if (queenCounter > 1) {
      return true;
    }
  }

  // horizontal
  for (column of board) {
    queenCounter = 0;
    for (let i = 0; i < board.length; i++) {
      if (column[i] === 1) {
        queenCounter++;
      }
      if (queenCounter > 1) {
        return true;
      }
    }
  }

  // vertical up left
  let y = queen2[0];
  let x = queen2[1];

  while (true) {
    y -= 1;
    x -= 1;
    if (y < 0 || y > 7 || x < 0 || x > 7) {
      break;
    }
    if (board[y][x] === 1) {
      return true;
    }
  }

  // vertical up right
  y = queen2[0];
  x = queen2[1];

  while (true) {
    y -= 1;
    x += 1;
    if (y < 0 || y > 7 || x < 0 || x > 7) {
      break;
    }
    if (board[y][x] === 1) {
      return true;
    }
  }
  return false;
};

let whiteQueen = [5, 6];
let blackQueen = [0, 1];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
