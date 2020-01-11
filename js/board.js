class Coin {
  constructor(coinId, color) {
    this.coinId = coinId;
    this.coinColor = color;
  }

  get id() {
    return this.coinId
  }

  get color() {
    return this.coinColor;
  }
}

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.coins = [];
  }

  get currentPlayer() {
    return this.player1;
  }

  getBoardCoins(board) {
    return board.coins.slice();
  }
}

class Board {
  constructor(initialCoins) {
    this.coins = [...initialCoins];
  }

  addCoinAt(id, color) {
    const coin = new Coin(id, color);
    this.coins.push(coin);
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
    board.addCoinAt(event.target.id, game.currentPlayer.color);
    const coins = game.getBoardCoins(board);
    displayCoins(coins);
  })
};

const main = function () {
  const player1 = { name: 'alpha', color: 'black' };
  const player2 = { name: 'beta', color: 'white' };
  setupGame();
  const initialCoins = [new Coin('3_3', 'black'), new Coin('3_4', 'white'), new Coin('4_3', 'white'), new Coin('4_4', 'black')]
  const game = new Game(player1, player2);
  const board = new Board(initialCoins);
  addClickListener(game, board);
  displayCoins(initialCoins);
};
