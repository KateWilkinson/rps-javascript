var player = new Player();
var computer = new Computer();
var game = new Game();

$('#rock').click(function() {
  player.choose("rock");
  computer.choose();
  $('#result').html(game.play(player.choice, computer.choice));
});

$('#paper').click(function() {
  player.choose("paper");
  computer.choose();
  $('#result').html(game.play(player.choice, computer.choice));
});

$('#scissors').click(function() {
  player.choose("scissors");
  computer.choose();
  $('#result').html(game.play(player.choice, computer.choice));
});
