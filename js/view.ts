/**************
 * @author Matthew Testerman <matthewtesterman83@gmail.com>
 * @file deck.ts/deck.js Contains View Class. (View)
 * @version 0.0.1
 * @copyright Mathtew Testerman. 2018-02-15
 ***************/
/// <reference path="hand.ts" />

class View {
  public dealerHand: Hand;
  public playerHand: Hand;
  public imgPath: string;
  constructor(dealerHand: Hand, playerHand: Hand, imgPath: string){
    this.dealerHand = dealerHand;
    this.playerHand = playerHand;
    this.imgPath = imgPath;
  }

  update() {
    this.updateCards();
    this.updateScores();
  }

  /*Update the Scorew*/
  private updateScores() {
    document.getElementById('player-score').innerHTML = this.playerHand.getTotalValue + "";
    document.getElementById('dealer-score').innerHTML = this.dealerHand.getTotalValue + "";
  }

  /* Iterates through both dealer and player hands and updates the view based on their hands  */
  private updateCards( ) {
    var htmlVal: string = "";

    var playerCards: Card[] = this.playerHand.getHand;
    var dealerCards: Card[] = this.dealerHand.getHand;

    for(var i: number = 0; i < playerCards.length; i++) {
      var cardName: string =   playerCards[i].getFaceValue + playerCards[i].getSuite;
      htmlVal += "<img src='" + this.imgPath + cardName + ".png' alt='" + cardName + "' class='img-fluid' />";
    }

    document.getElementById('player-hand').innerHTML = htmlVal;
    htmlVal = "";

    for(var i: number = 0; i < dealerCards.length; i++) {
      var cardName: string =   dealerCards[i].getFaceValue + dealerCards[i].getSuite;
      htmlVal += "<img src='" + this.imgPath + cardName + ".png' alt='" + cardName + "' class='img-fluid'/>";

      //If this is the first round then only show one card for dealer and 2nd being a card turned down
      if (dealerCards.length === 1) {
      htmlVal += "<img src='img/card.png' alt='cover' class='img-fluid' />";
    }
  }
  document.getElementById('dealer-hand').innerHTML = htmlVal;
  htmlVal = "";
  }

  private clearGame() {
    //remove cards from dealer and player
    //
  }

  showChoices() {
    document.getElementById('choice').style.display = 'block';
  }

  /*Show Pop Up*/
  showPopUp(type: string, message: string) {
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
  }

  /*Hide Pop Ups*/
  private hidePopUp() {
    $('#push-modal').css('display', 'none');
    $('#push-modal button').removeAttr('disabled');
    $('#winner-modal button').removeAttr('disabled');
    $('#winner-modal').css('display', 'none');
    $('#loose-modal button').removeAttr('disabled');
    $('#loose-modal').css('display', 'none');
  }

  /*Reset View*/
  resetView() {
    this.hidePopUp();
  }

  lockButtons(){
    $('button').prop('disabled',true);
  }

  unlockButtons() {
    $('button').removeAttr('disabled');
  }
}
