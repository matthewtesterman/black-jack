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
var Hand = /** @class */ (function () {
    function Hand() {
        this.hand = [];
        this.handValue = 0;
    }
    /* Sum all the values of the hand. */
    Hand.prototype.calcTotalValue = function () {
        this.handValue = 0;
        for (var i = 0; i <= this.hand.length - 1; i++) {
            var value = this.hand[i].getFaceValue;
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
    };
    /* Add Card to the Hand*/
    Hand.prototype.addCard = function (card) {
        this.hand.push(card);
    };
    Object.defineProperty(Hand.prototype, "getHand", {
        /* Get the Cards from the hand*/
        get: function () {
            return this.hand;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hand.prototype, "getTotalValue", {
        /* Get the sum of all the cards in the hand */
        get: function () {
            return this.handValue;
        },
        enumerable: true,
        configurable: true
    });
    return Hand;
}());
