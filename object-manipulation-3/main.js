console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [{ name: 'paul', hand: null }, { name: 'denny', hand: null }, { name: 'heesoo', hand: null }, { name: 'isaac', hand: null }];

var deck = [];

function createDeck() {

  var suits = ['spades', 'diamond', 'heart', 'club'];
  var name = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < name.length; j++) {
      var card = { rank: name[j], suit: suits[i] };
      deck.push(card);
    }
  }
}

var shuffleDeck = [];

shuffleDeck = players;
createDeck(shuffleDeck);
