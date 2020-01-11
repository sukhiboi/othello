class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  get currentState() {
    return {
      currentPlayerName: this.player1.name,
      currentCoinColor: this.player1.color,
    }
  }
}

class Board {
  constructor(initialCoins) {
    this._coins = [...initialCoins];
  }

  addCoinAt(id, color) {
    this._coins.push({ id, color });
  }

  get coins() {
    return this._coins.slice();
  }
}

const setupGame = function () {
  const createCell = function (cellId) {
    const cell = document.createElement('div');
    cell.id = cellId;
    cell.className = 'cell selectable';
    cell.innerText = cellId;
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

  const numOfRows = 8, numOfCols = 8;
  createBoard(numOfRows, numOfCols);
};

const displayCoins = function (coins) {
  coins.forEach(coin => {
    const cell = document.getElementById(coin.id);
    const currentCoin = document.createElement('div');
    currentCoin.className = `coin ${coin.color}`;
    cell.appendChild(currentCoin);
  })
};

const addClickListener = function (game, board) {
  const othelloBoard = document.getElementById('board');
  othelloBoard.addEventListener('click', () => {
    const gameState = game.currentState;
    board.addCoinAt(event.target.id, gameState.currentCoinColor);
    const coins = board.coins;
    displayCoins(coins);
  })
};

const createCoin = (id, color) => { return { id, color } };

const createInitialCoins = function () {
  const coinsInfo = [['3_3', 'black'], ['3_4', 'white'], ['4_3', 'white'], ['4_4', 'black']];
  const initialCoins = coinsInfo.map(info => {
    const [id, color] = info;
    return createCoin(id, color);
  })
  return initialCoins;
};

const main = function () {
  const player1 = { name: 'alpha', color: 'black' };
  const player2 = { name: 'beta', color: 'white' };
  setupGame();
  const initialCoins = createInitialCoins();
  const game = new Game(player1, player2);
  const board = new Board(initialCoins);
  addClickListener(game, board);
  displayCoins(initialCoins);
};
