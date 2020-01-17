const main = function() {
  const player1 = { name: 'sukhi', color: 'white' };
  const player2 = { name: 'rahit', color: 'black' };
  setupGame();
  const game = new Game(player1, player2);

  displayCoins(game.coins());
  addClickListener(game);
};

window.onload = main;