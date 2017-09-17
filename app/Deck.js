import { shuffle } from "./lib";
import { RANKS, SUITS } from './constants'

export default class Deck {
  constructor() {
    this.decks = shuffle([].concat.apply([], RANKS.map(rank => SUITS.map(suit => ({rank, suit})))))
  }

  getNextCard() {
    return this.decks.pop();
  }
}
