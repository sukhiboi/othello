const setupGame = function() {
  const createCell = function(cellId) {
    const cell = document.createElement('div');
    cell.id = cellId;
    cell.className = 'cell selectable';
    cell.innerText = cellId;
    return cell;
  };

  const createBoard = function(numOfRows, numOfCols) {
    const board = document.getElementById('board');
    for (let rowId = 0; rowId < numOfRows; rowId++) {
      for (let colId = 0; colId < numOfCols; colId++) {
        const cell = createCell(`${rowId}_${colId}`);
        board.appendChild(cell);
      }
    }
  };

  const numOfRows = 8,
    numOfCols = 8;
  createBoard(numOfRows, numOfCols);
};

const displayCoins = function(coins) {
  coins.forEach(coin => {
    const cell = document.getElementById(coin.id);
    const currentCoin = document.createElement('div');
    currentCoin.className = `coin ${coin.color}`;
    cell.appendChild(currentCoin);
  });
};

const addClickListener = function(game) {
  const board = document.getElementById('board');
  board.addEventListener('click', () => {
    game.addCoinAt(event.target.id);
    displayCoins(game.coins());
  });
};
