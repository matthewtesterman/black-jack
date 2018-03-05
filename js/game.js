/**************
 * @author Matthew Testerman <matthewtesterman83@gmail.com>
 * @file deck.ts/deck.js Game Card Class. (Controller)
 * @version 0.0.1
 * @copyright Mathtew Testerman. 2018-02-15
 ***************/
/// <reference path="deck.ts" />
/// <reference path="hand.ts" />
/// <reference path="view.ts" />
var Game = /** @class */ (function () {
    function Game(imgPath) {
        this.imgPath = imgPath;
    }
    Game.prototype.setup = function () {
        //get a new deck and shuffle it.
        this.deck = new Deck();
        this.deck.shuffle();
        //Create two hands: dealer and player
        this.playerHand = new Hand();
        this.dealerHand = new Hand();
        //draw 1 cards for dealer and 2 for player's hand
        this.playerHand.addCard(this.deck.drawCard());
        this.playerHand.addCard(this.deck.drawCard());
        this.dealerHand.addCard(this.deck.drawCard());
        //Create new View
        this.view = new View(this.dealerHand, this.playerHand, this.imgPath);
        this.playerHand.calcTotalValue();
        this.dealerHand.calcTotalValue();
        this.view.update();
        this.view.unlockButtons();
    };
    Game.prototype.run = function () {
        //get in local scope for event handlers.
        var currentGame = this;
        //Event listener for hit me button.
        document.getElementById('hitMe').addEventListener('click', function (e) {
            currentGame.view.lockButtons();
            //  $('button').attr('disabled',true);
            e.preventDefault();
            currentGame.hitMe(currentGame.playerHand);
            //check if checkBus
            currentGame.playerHand.calcTotalValue();
            var totalValue = currentGame.playerHand.getTotalValue;
            currentGame.view.update();
            if (currentGame.isBust(totalValue)) {
                currentGame.view.showPopUp('lose', 'Bust!');
            }
            else {
                currentGame.view.unlockButtons();
            }
        });
        //Stand Button listener
        document.getElementById('stand').addEventListener('click', function (e) {
            currentGame.view.lockButtons();
            e.preventDefault();
            currentGame.dealersPlay(currentGame);
        });
        //Retry Button listener
        $('.retry').click(function (e) {
            currentGame.view.lockButtons();
            e.preventDefault();
            currentGame.restart(currentGame);
        });
        //both hands are already drawn. THe first question that comes is: stand or hitme or surrender.
        this.view.showChoices();
        //Update the views score and other stuff.
        this.view.update();
    };
    /*This method deals with the Dealers play*/
    Game.prototype.dealersPlay = function (currentGame) {
        var drawnCard = currentGame.deck.drawCard();
        var drawnCardFace = drawnCard.getFaceValue + "" + drawnCard.getSuite; //get suit and value of card in string type
        currentGame.dealerHand.addCard(drawnCard); //draw 2nd card.
        currentGame.dealerHand.calcTotalValue();
        currentGame.view.update(); //show 2nd card.
        while (currentGame.dealerHand.getTotalValue < 17) {
            var drawnCard = currentGame.deck.drawCard();
            var drawnCardFace = drawnCard.getFaceValue + "" + drawnCard.getSuite; //get suit and value of card in string type
            currentGame.dealerHand.addCard(drawnCard); //draw 2nd card.
            currentGame.dealerHand.calcTotalValue();
            currentGame.view.update();
        }
        if (currentGame.dealerHand.getTotalValue > 21) {
            currentGame.view.showPopUp('win', 'Dealer went bust! You Win!');
        }
        else if (currentGame.dealerHand.getTotalValue === currentGame.playerHand.getTotalValue) {
            currentGame.view.showPopUp('tie', 'You both tie!');
        }
        else if (currentGame.dealerHand.getTotalValue > currentGame.playerHand.getTotalValue) {
            currentGame.view.showPopUp('lose', 'You lose!');
        }
        else if (currentGame.dealerHand.getTotalValue < currentGame.playerHand.getTotalValue) {
            currentGame.view.showPopUp('win', 'Congratulations! You are a winner!');
        }
    };
    //Purpose is to draw another card from deck and into that hand.
    Game.prototype.hitMe = function (currentHand) {
        var drawnCard = this.deck.drawCard();
        currentHand.addCard(drawnCard);
        this.playerHand.calcTotalValue();
        this.view.update();
    };
    /*Check if went over 21.*/
    Game.prototype.isBust = function (totalValue) {
        if (totalValue > 21) {
            return true;
        }
        else {
            return false;
        }
    };
    Game.prototype.restart = function (currentGame) {
        //Free Memory
        currentGame.playerHand = null;
        currentGame.dealerHand = null;
        currentGame.deck = null;
        currentGame.view.resetView();
        currentGame.setup();
    };
    return Game;
}());
