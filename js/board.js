const numOfRows = 8, numOfCols = 8;
const coinType = {
  black: 'black',
  white: 'white'
};
let playerId = 0;

const setCoin = function (cellId, coinColor) {
  const cell = document.getElementById(cellId);
  const coin = document.createElement('div');
  coin.className = `coin unselectable ${coinColor}`;
  cell.classList.remove('selectable')
  cell.appendChild(coin);
  cell.removeEventListener('click', clickHandler);
};


const clickHandler = function () {
  const cellId = event.target.id;
  const currentPlayer = changePlayer(playerId);
  playerId = +(!playerId)
  setCoin(cellId, currentPlayer.color());
};

const createCell = function (cellId) {
  const cell = document.createElement('div');
  cell.id = cellId;
  cell.className = 'cell selectable';
  cell.addEventListener('click', clickHandler);
  return cell;
};

const createBoard = function (numOfRows, numOfCols) {
  const board = document.getElementById('board');
  for (let rowId = 0; rowId < numOfRows; rowId++) {
    for (let colId = 0; colId < numOfCols; colId++) {
      const cell = createCell(`${rowId}_${colId}`);
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

class Player {
  constructor(name, color) {
    this._name = name;
    this._color = color
  }

  name() {
    return this._name;
  }

  color() {
    return this._color;
  }
}

const changePlayer = function (playerId) {
  const players = {
    0: new Player('rahit', coinType.white),
    1: new Player('sukhiboi', coinType.black)
  }
  return players[playerId];
};


const main = function () {
  createBoard(numOfRows, numOfCols);
  setInitialCoins();

};