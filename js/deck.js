/**************
 * @author Matthew Testerman <matthewtesterman83@gmail.com>
 * @file deck.ts/deck.js Contains Card Class.
 * @version 0.0.1
 * @copyright Mathtew Testerman. 2018-02-15
 ***************/
/// <reference path="card.ts" />
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [
            new Card("A", "Spades"),
            new Card("K", "Spades"),
            new Card("Q", "Spades"),
            new Card("J", "Spades"),
            new Card("10", "Spades"),
            new Card("9", "Spades"),
            new Card("8", "Spades"),
            new Card("7", "Spades"),
            new Card("6", "Spades"),
            new Card("5", "Spades"),
            new Card("4", "Spades"),
            new Card("3", "Spades"),
            new Card("2", "Spades"),
            new Card("A", "Clubs"),
            new Card("K", "Clubs"),
            new Card("Q", "Clubs"),
            new Card("J", "Clubs"),
            new Card("10", "Clubs"),
            new Card("9", "Clubs"),
            new Card("8", "Clubs"),
            new Card("7", "Clubs"),
            new Card("6", "Clubs"),
            new Card("5", "Clubs"),
            new Card("4", "Clubs"),
            new Card("3", "Clubs"),
            new Card("2", "Clubs"),
            new Card("A", "Diamonds"),
            new Card("K", "Diamonds"),
            new Card("Q", "Diamonds"),
            new Card("J", "Diamonds"),
            new Card("10", "Diamonds"),
            new Card("9", "Diamonds"),
            new Card("8", "Diamonds"),
            new Card("7", "Diamonds"),
            new Card("6", "Diamonds"),
            new Card("5", "Diamonds"),
            new Card("4", "Diamonds"),
            new Card("3", "Diamonds"),
            new Card("2", "Diamonds"),
            new Card("A", "Hearts"),
            new Card("K", "Hearts"),
            new Card("Q", "Hearts"),
            new Card("J", "Hearts"),
            new Card("10", "Hearts"),
            new Card("9", "Hearts"),
            new Card("8", "Hearts"),
            new Card("7", "Hearts"),
            new Card("6", "Hearts"),
            new Card("5", "Hearts"),
            new Card("4", "Hearts"),
            new Card("3", "Hearts"),
            new Card("2", "Hearts"),
        ];
    }
    Deck.prototype.shuffle = function () {
        var j, x, i;
        for (i = this.cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = x;
        }
    };
    Object.defineProperty(Deck.prototype, "getDeck", {
        get: function () {
            return this.cards;
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Will take the top card.
    */
    Deck.prototype.drawCard = function () {
        var drawnCard = this.cards[0]; //Get top Card from deck
        this.cards.splice(0, 1); //remove top card from pile
        return drawnCard;
    };
    return Deck;
}());
