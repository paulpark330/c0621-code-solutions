console.log('Lodash is loaded:', typeof _ !== 'undefined');

function playGame(players, numOfCards) {
  var deck = [];
  var shuffleDeck = [];

  function createDeck() {
    var suits = ['spades', 'diamond', 'heart', 'club'];
    var name = [
      ['A', 11],
      ['2', 2],
      ['3', 3],
      ['4', 4],
      ['5', 5],
      ['6', 6],
      ['7', 7],
      ['8', 8],
      ['9', 9],
      ['10', 10],
      ['J', 10],
      ['Q', 10],
      ['K', 10]
    ];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < name.length; j++) {
        var card = { rank: name[j], suit: suits[i] };
        deck.push(card);
      }
    }
  }

  createDeck();
  shuffleDeck = _.shuffle(deck);
  for (let i = 0; i < players.length; i++) {
    var sum = 0;
    for (let j = 1; j <= numOfCards; j++) {
      players[i][j] = shuffleDeck[0];
      sum += players[i][j].rank[1];
      players[i].sum = sum;
      shuffleDeck.splice(0, 1);
    }
    console.log(players[i]);
  }
  var max = 0;
  var winner = {};
  for (let i = 0; i < players.length; i++) {
    if (players[i].sum > max) {
      max = players[i].sum;
      winner = players[i];
    }
  }
  console.log('winner: ' + winner.name + ' total: ' + winner.sum);
}

playGame(
  [
    { name: 'paul' },
    { name: 'denny' },
    { name: 'heesoo' },
    { name: 'isaac' },
    { name: 'danny' },
    { name: 'mike' }
  ],
  2
);
