/**************
 * @author Matthew Testerman <matthewtesterman83@gmail.com>
 * @file deck.ts/deck.js Contains View Class. (View)
 * @version 0.0.1
 * @copyright Mathtew Testerman. 2018-02-15
 ***************/
/// <reference path="hand.ts" />
var View = /** @class */ (function () {
    function View(dealerHand, playerHand, imgPath) {
        this.dealerHand = dealerHand;
        this.playerHand = playerHand;
        this.imgPath = imgPath;
    }
    View.prototype.update = function () {
        this.updateCards();
        this.updateScores();
    };
    /*Update the Scorew*/
    View.prototype.updateScores = function () {
        document.getElementById('player-score').innerHTML = this.playerHand.getTotalValue + "";
        document.getElementById('dealer-score').innerHTML = this.dealerHand.getTotalValue + "";
    };
    /* Iterates through both dealer and player hands and updates the view based on their hands  */
    View.prototype.updateCards = function () {
        var htmlVal = "";
        var playerCards = this.playerHand.getHand;
        var dealerCards = this.dealerHand.getHand;
        for (var i = 0; i < playerCards.length; i++) {
            var cardName = playerCards[i].getFaceValue + playerCards[i].getSuite;
            htmlVal += "<img src='" + this.imgPath + cardName + ".png' alt='" + cardName + "' class='img-fluid' />";
        }
        document.getElementById('player-hand').innerHTML = htmlVal;
        htmlVal = "";
        for (var i = 0; i < dealerCards.length; i++) {
            var cardName = dealerCards[i].getFaceValue + dealerCards[i].getSuite;
            htmlVal += "<img src='" + this.imgPath + cardName + ".png' alt='" + cardName + "' class='img-fluid'/>";
            //If this is the first round then only show one card for dealer and 2nd being a card turned down
            if (dealerCards.length === 1) {
                htmlVal += "<img src='img/card.png' alt='cover' class='img-fluid' />";
            }
        }
        document.getElementById('dealer-hand').innerHTML = htmlVal;
        htmlVal = "";
    };
    View.prototype.clearGame = function () {
        //remove cards from dealer and player
        //
    };
    View.prototype.showChoices = function () {
        document.getElementById('choice').style.display = 'block';
    };
    /*Show Pop Up*/
    View.prototype.showPopUp = function (type, message) {
        if (type === "tie") {
            $('#push-modal button').removeAttr('disabled');
            $('#push-modal').fadeIn(2000);
            $('#push-modal .message').html(message);
        }
        else if (type === "win") {
            $('#winner-modal button').removeAttr('disabled');
            $('#winner-modal').fadeIn(2000);
            $('#winner-modal .message').html(message);
        }
        else if (type === "lose") {
            $('#loose-modal button').removeAttr('disabled');
            $('#loose-modal').fadeIn(2000);
            $('#loose-modal .message').html(message);
        }
    };
    /*Hide Pop Ups*/
    View.prototype.hidePopUp = function () {
        $('#push-modal').css('display', 'none');
        $('#push-modal button').removeAttr('disabled');
        $('#winner-modal button').removeAttr('disabled');
        $('#winner-modal').css('display', 'none');
        $('#loose-modal button').removeAttr('disabled');
        $('#loose-modal').css('display', 'none');
    };
    /*Reset View*/
    View.prototype.resetView = function () {
        this.hidePopUp();
    };
    View.prototype.lockButtons = function () {
        $('button').prop('disabled', true);
    };
    View.prototype.unlockButtons = function () {
        $('button').removeAttr('disabled');
    };
    return View;
}());
