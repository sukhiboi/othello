const numOfRows = 8, numOfCols = 8;
const coinType = {
  black: 'black',
  white: 'white'
};

const setCoin = function (cellId, coinColor) {
  const cell = document.getElementById(cellId);
  const coin = document.createElement('div');
  coin.classList.add('coin');
  coin.classList.add(coinColor);
  cell.appendChild(coin);
  cell.removeEventListener('click', clickHandler)
};

const clickHandler = function () {
  const cellId = event.target.id;
  setCoin(cellId, coinType.black)
};

const createCell = function (cellId) {
  const cell = document.createElement('div');
  cell.id = cellId;
  cell.classList.add('cell');
  cell.addEventListener('click', clickHandler);
  return cell;
};

const createBoard = function (numOfRows, numOfCols) {
  const board = document.getElementById('board');
  for (let rowId = 0; rowId < numOfRows; rowId++) {
    for (let colId = 0; colId < numOfCols; colId++) {
      const cellId = `${rowId}_${colId}`;
      const cell = createCell(cellId);
      board.appendChild(cell);
    }
  }
};

const setInitialCoins = function () {
  const coins = [
    { id: '3_3', colour: coinType.white },
    { id: '3_4', colour: coinType.black },
    { id: '4_3', colour: coinType.black },
    { id: '4_4', colour: coinType.white }
  ]
  coins.forEach(coin => setCoin(coin.id, coin.colour))
};

const main = function () {
  createBoard(numOfRows, numOfCols);
  setInitialCoins();
};