const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ['H', 'D', 'S', 'C'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',

  initDeck(){
    const {suits, deck, values} = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push(
          {
            value,
            suit
          }
        );// end deck.push
      }// end for let suit
    }// end for let value
  },

  drawCard(){
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },

  drawMultiple(numCards) {
    const cards = [];

    for (let i = 0; i < numCards; i++){
      cards.push(this.drawCard());
    }// end for let i = 0

    return cards;
  }, // end drawMultiple

  shuffle() {
    const {deck} = this;

    for (let i = deck.length - 1; i> 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }// end for let i
  },
}// end const myDeck

myDeck.initDeck();
