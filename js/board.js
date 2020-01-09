const createBoard = function (numOfRows, numOfCols) {
  const board = document.getElementById('board');
  for (let rowId = 0; rowId < numOfRows; rowId++) {
    for (let colId = 0; colId < numOfCols; colId++) {
      const cell = document.createElement('div');
      cell.id = `${rowId}_${colId}`;
      cell.classList.add('cell')
      board.appendChild(cell);
    }
  }
};

const main = function () {
  const numOfRows = 8, numOfCols = 8;
  createBoard(numOfRows, numOfCols)
};