const setCoin = function ([rowId, colId], coinColor) {
  const cellId = `${rowId}_${colId}`;
  const cell = document.getElementById(cellId);
  const coin = document.createElement('div');
  coin.classList.add('coin');
  coin.classList.add(coinColor);
  cell.appendChild(coin);
  cell.removeEventListener('click', clickHandler)
};

const clickHandler = function () {
  const cellId = event.target.id.split('_');
  console.log(cellId);
  setCoin(cellId, "black")
};

const createCell = function (rowId, colId) {
  const cell = document.createElement('div');
  cell.id = `${rowId}_${colId}`;
  cell.classList.add('cell');
  cell.addEventListener('click', clickHandler);
  return cell;
};

const createBoard = function (numOfRows, numOfCols) {
  const board = document.getElementById('board');
  for (let rowId = 0; rowId < numOfRows; rowId++) {
    for (let colId = 0; colId < numOfCols; colId++) {
      const cell = createCell(rowId, colId);
      board.appendChild(cell);
    }
  }
};

const main = function () {
  const numOfRows = 8, numOfCols = 8, BLACK = 'black', WHITE = 'white';
  createBoard(numOfRows, numOfCols);
  setCoin([3, 3], WHITE)
  setCoin([3, 4], BLACK)
  setCoin([4, 3], "black")
  setCoin([4, 4], WHITE)
};