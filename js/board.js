class Game {
  constructor(player1, player2, initialCoins) {
    this.player1 = player1;
    this.player2 = player2;
    this.turn = player1;
    this._coins = [
      { id: '3_3', color: 'black' },
      { id: '3_4', color: 'white' },
      { id: '4_3', color: 'white' },
      { id: '4_4', color: 'black' }
    ];
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

const main = function() {
  const player1 = { name: 'sukhi', color: 'white' };
  const player2 = { name: 'rahit', color: 'black' };
  setupGame();
  const game = new Game(player1, player2);

  displayCoins(game.coins());
  addClickListener(game);
};

window.onload = main;