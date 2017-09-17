import { shuffle } from "./lib";
import { RANKS, SUITS } from './constants'

export default class Deck {
  constructor() {
    this.deck = shuffle([].concat.apply([], RANKS.map(rank => SUITS.map(suit => ({rank, suit})))));
    this.topCard = this.getNextCard();
  }

  getNextCard() {
    this.topCard = this.deck.pop();
    return this.topCard;
  }
}
