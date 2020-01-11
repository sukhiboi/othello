class Game {
  constructor(player1, player2, initialCoins) {
    this.player1 = player1;
    this.player2 = player2;
    this.turn = player1;
    this._coins = [...initialCoins];
  }

  coins() {
    return this._coins.slice();
  }

  addCoinAt(id) {
    this._coins.push({ id, color: this.turn.color });
    if (this.turn == this.player1) {
      this.turn = this.player2;
      return;
    }
    this.turn = this.player1;
    return;
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

const addClickListener = function (game) {
  const board = document.getElementById('board');
  board.addEventListener('click', () => {
    game.addCoinAt(event.target.id);
    displayCoins(game.coins());
  })
};

const createInitialCoins = function () {
  const createCoin = (id, color) => { return { id, color } };
  const coinsInfo = [['3_3', 'black'], ['3_4', 'white'], ['4_3', 'white'], ['4_4', 'black']];
  const initialCoins = coinsInfo.map(info => {
    const [id, color] = info;
    return createCoin(id, color);
  });
  return initialCoins;
};

const main = function () {
  const player1 = { name: 'alpha', color: 'white' };
  const player2 = { name: 'beta', color: 'black' };
  setupGame();
  const initialCoins = createInitialCoins();
  const game = new Game(player1, player2, initialCoins);
  addClickListener(game, board);
  displayCoins(initialCoins);
};
