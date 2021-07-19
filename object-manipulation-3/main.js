console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'paul', firstHand: null, secondHand: null },
  { name: 'denny', firstHand: null, secondHand: null },
  { name: 'heesoo', firstHand: null, secondHand: null },
  { name: 'isaac', firstHand: null, secondHand: null }
];
var deck = [];

function playGame() {

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
  var shuffleDeck = _.shuffle(deck);
  for (let i = 0; i < players.length; i++) {
    players[i].firstHand = shuffleDeck[Math.floor(Math.random() * 52)];
    players[i].secondHand = shuffleDeck[Math.floor(Math.random() * 52)];
    players[i].result = players[i].firstHand.rank[1] + players[i].secondHand.rank[1];
  }
  console.log(players);
  var max = 0;
  var winner = {};
  for (let i = 0; i < players.length; i++) {
    if (players[i].result > max) {
      max = players[i].result;
      winner = players[i];
    }
  }
  console.log('winner: ' + winner.name + ': ' + winner.result);
}

playGame();
