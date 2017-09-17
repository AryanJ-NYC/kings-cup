export default class Deck {
  constructor() {
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
    const suits = ["S", "H", "C", "D"];

    this.decks = [].concat.apply([], ranks.map(rank => suits.map(suit => ({rank, suit}))));
  }
}
