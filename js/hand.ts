/**************
* @author Matthew Testerman <matthewtesterman83@gmail.com>
* @file hand.ts/hand.js Contains Hand Class.
* @version 0.0.1
* @copyright Mathtew Testerman. 2018
***************/
/// <reference path="deck.ts" />

/*
*
*/
class Hand {
  public hand: Card[] = [];
  public handValue: number = 0;
  constructor(){}

  /* Sum all the values of the hand. */
  calcTotalValue() {
    this.handValue = 0;
    for(var i: number = 0; i<= this.hand.length - 1; i++)  {
      var value: string = this.hand[i].getFaceValue;
      if (!isNaN(parseInt(value))) {
        this.handValue += parseInt(value);
      }
      else if (value === 'J' || value === 'Q' || value === 'K') {
        this.handValue += 10;
      }
      else if (value === 'A') {
        this.handValue += 11;
      }
    }
  }

  /* Add Card to the Hand*/
  addCard(card: Card) {
    this.hand.push(card);
  }

  /* Get the Cards from the hand*/
  get getHand(): Card[] {
    return this.hand;
  }

  /* Get the sum of all the cards in the hand */
  get getTotalValue(): number {
    return this.handValue;
  }
}
